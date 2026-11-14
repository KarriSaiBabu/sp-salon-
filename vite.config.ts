import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

function copyStaticAssetsPlugin(): Plugin {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const rootDir = import.meta.dirname ?? process.cwd();
      const distDir = path.resolve(rootDir, 'dist');
      if (!fs.existsSync(distDir)) return;

      const appJsSrc = path.resolve(rootDir, 'app.js');
      if (fs.existsSync(appJsSrc)) {
        fs.copyFileSync(appJsSrc, path.join(distDir, 'app.js'));
      }

      const imagesSrc = path.resolve(rootDir, 'images');
      const imagesDest = path.join(distDir, 'images');
      if (fs.existsSync(imagesSrc)) {
        fs.mkdirSync(imagesDest, { recursive: true });
        for (const file of fs.readdirSync(imagesSrc)) {
          fs.copyFileSync(path.join(imagesSrc, file), path.join(imagesDest, file));
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [copyStaticAssetsPlugin()],
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
