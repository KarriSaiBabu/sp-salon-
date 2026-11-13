import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

function copyStaticAssetsPlugin(): Plugin {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;

      const appJsSrc = path.resolve(__dirname, 'app.js');
      if (fs.existsSync(appJsSrc)) {
        fs.copyFileSync(appJsSrc, path.join(distDir, 'app.js'));
      }

      const imagesSrc = path.resolve(__dirname, 'images');
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
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
