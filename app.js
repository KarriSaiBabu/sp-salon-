(function () {
  'use strict';

  const SALON_INFO = {
    name: 'SP Unisex Salon',
    phoneDisplay: '083280 94714',
    whatsappNumber: '918328094714',
    fullAddress:
      '1st floor, Top of the Vizag sports, Resapuvanipalem Rd, beside CMR CENTRAL, Resapuvanipalem, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530013',
  };

  const SERVICE_CATEGORIES = [
    'Hair & Styling',
    'Skin & Facials',
    'Bridal & Make-up',
    'Spa, Nails & Grooming',
  ];

  const SALON_SERVICES = [
    {
      id: 'haircut',
      name: 'Haircut',
      category: 'Hair & Styling',
      durationMins: 40,
      priceFrom: 250,
      description: 'Precision consultation, wash, tailored unisex cut, and signature finish.',
    },
    {
      id: 'blow-dry',
      name: 'Blow Dry',
      category: 'Hair & Styling',
      durationMins: 35,
      priceFrom: 450,
      description: 'Voluminous, frizz-free round-brush blow dry with heat protection.',
    },
    {
      id: 'hairstyling',
      name: 'Hairstyling',
      category: 'Hair & Styling',
      durationMins: 45,
      priceFrom: 650,
      description: 'Editorial waves, sleek straightening, braids, and occasion updos.',
    },
    {
      id: 'shampoo-conditioning',
      name: 'Shampoo & Conditioning',
      category: 'Hair & Styling',
      durationMins: 25,
      priceFrom: 300,
      description: 'Deep scalp cleanse and nourishing moisture mask tailored to hair texture.',
    },
    {
      id: 'hair-extensions',
      name: 'Hair Extensions',
      category: 'Hair & Styling',
      durationMins: 90,
      priceFrom: 2500,
      description: 'Seamless volume and length enhancement matched carefully to natural tone.',
    },
    {
      id: 'facials',
      name: 'Facials',
      category: 'Skin & Facials',
      durationMins: 60,
      priceFrom: 950,
      description: 'Custom glow, hydration, and brightening facials with lymphatic massage.',
    },
    {
      id: 'skin-care',
      name: 'Skin Care',
      category: 'Skin & Facials',
      durationMins: 45,
      priceFrom: 750,
      description: 'Targeted barrier-repair cleanups and calming botanical skin therapies.',
    },
    {
      id: 'acne-treatments',
      name: 'Acne Treatments',
      category: 'Skin & Facials',
      durationMins: 50,
      priceFrom: 1100,
      description: 'Gentle pore purification and oil-balancing care for blemish-prone skin.',
    },
    {
      id: 'tanning',
      name: 'De-Tan & Tanning Care',
      category: 'Skin & Facials',
      durationMins: 40,
      priceFrom: 600,
      description: 'Even-tone skin restoration to remove sun dullness or deliver sun-kissed tone.',
    },
    {
      id: 'eyebrow-beautification',
      name: 'Eyebrow Beautification',
      category: 'Skin & Facials',
      durationMins: 20,
      priceFrom: 120,
      description: 'Balanced threading, shaping, and brow definition tailored to facial symmetry.',
    },
    {
      id: 'bridal-services',
      name: 'Bridal Services',
      category: 'Bridal & Make-up',
      durationMins: 180,
      priceFrom: 8500,
      description: 'Complete bridal transformation with trial consultation, saree draping, and styling.',
    },
    {
      id: 'makeup',
      name: 'Make-up',
      category: 'Bridal & Make-up',
      durationMins: 75,
      priceFrom: 2200,
      description: 'Long-wear HD and soft-focus complexion artistry for parties and portraits.',
    },
    {
      id: 'makeup-services',
      name: 'Make-up Services',
      category: 'Bridal & Make-up',
      durationMins: 60,
      priceFrom: 1800,
      description: 'Customized day-to-evening looks with skin-first prep and gentle finishes.',
    },
    {
      id: 'wedding-event-prep',
      name: 'Wedding & Event Preparation',
      category: 'Bridal & Make-up',
      durationMins: 120,
      priceFrom: 3500,
      description: 'Pre-event grooming packages for brides, grooms, families, and bridesmaids.',
    },
    {
      id: 'spa-services',
      name: 'Spa Services',
      category: 'Spa, Nails & Grooming',
      durationMins: 60,
      priceFrom: 1100,
      description: 'Restorative hair and body spa rituals designed to quiet stress and nourish.',
    },
    {
      id: 'massage',
      name: 'Massage',
      category: 'Spa, Nails & Grooming',
      durationMins: 45,
      priceFrom: 850,
      description: 'Soothing head, neck, shoulder, and full-relaxation therapeutic massage.',
    },
    {
      id: 'manicure',
      name: 'Manicure',
      category: 'Spa, Nails & Grooming',
      durationMins: 40,
      priceFrom: 450,
      description: 'Cuticle care, gentle exfoliation, hand massage, and high-gloss nail polish.',
    },
    {
      id: 'pedicure',
      name: 'Pedicure',
      category: 'Spa, Nails & Grooming',
      durationMins: 50,
      priceFrom: 650,
      description: 'Warm soak, heel refinement, foot massage, and tidy nail finishing.',
    },
    {
      id: 'body-waxing',
      name: 'Body Waxing',
      category: 'Spa, Nails & Grooming',
      durationMins: 45,
      priceFrom: 550,
      description: 'Hygienic, low-discomfort Rica and soothing wax treatments for smooth skin.',
    },
    {
      id: 'shaving',
      name: 'Shaving & Beard Grooming',
      category: 'Spa, Nails & Grooming',
      durationMins: 25,
      priceFrom: 180,
      description: 'Hot-towel straight-razor shave, sharp beard sculpting, and calming balm.',
    },
  ];

  const HERO_SLIDES = [
    {
      id: 'hero-interior',
      title: 'Calm Luxury on Resapuvanipalem Road',
      category: 'Salon Interior',
      caption: 'Warm travertine styling stations beside CMR Central, Dwaraka Nagar',
      detail: 'Open daily until 10:00 PM',
      imageSrc: './images/hero-salon-interior.jpg',
      alt: 'SP Unisex Salon luxury interior with travertine walls and backlit brass mirrors',
    },
    {
      id: 'hero-hair',
      title: 'Precision Haircuts & Signature Blow Dry',
      category: 'Hair & Styling',
      caption: 'Patient, detail-driven unisex styling tailored to your natural texture',
      detail: 'Haircut · Blow Dry · Hair Extensions',
      imageSrc: './images/service-hair-styling.jpg',
      alt: 'Master hair stylist completing a glossy blow dry and haircut at SP Unisex Salon',
    },
    {
      id: 'hero-bridal',
      title: 'Bridal Artistry & Event Preparation',
      category: 'Bridal & Make-up',
      caption: 'Luminous wedding makeup, hairstyling, and pre-ceremony skin rituals',
      detail: 'Bridal Packages · HD Make-up',
      imageSrc: './images/service-bridal-makeup.jpg',
      alt: 'Indian bridal makeup and floral hairstyling preparation at SP Unisex Salon',
    },
    {
      id: 'hero-spa',
      title: 'Restorative Facials & Botanical Spa Care',
      category: 'Skin & Spa',
      caption: 'Quiet treatment suites for acne care, de-tan facials, and relaxing massage',
      detail: 'Facials · Acne Care · Massage',
      imageSrc: './images/service-facial-spa.jpg',
      alt: 'Serene skincare facial and spa treatment room with botanical serums and warm stones',
    },
  ];

  const GALLERY_ITEMS = [
    ...HERO_SLIDES,
    {
      id: 'gallery-grooming',
      title: 'Precision Shaving & Manicure Lounge',
      category: 'Grooming & Nails',
      caption: 'Sanitized brass tools, hot-towel beard grooming, and nail artistry',
      detail: 'Shaving · Manicure · Pedicure',
      imageSrc: './images/service-grooming-manicure.jpg',
      alt: 'Unisex grooming and manicure station with brushed brass tools and nail lacquer',
    },
  ];

  const GALLERY_FILTERS = [
    'All',
    'Salon Interior',
    'Hair & Styling',
    'Bridal & Make-up',
    'Skin & Spa',
    'Grooming & Nails',
  ];

  const GOOGLE_REVIEW_BREAKDOWN = [
    { stars: 5, percentage: 98 },
    { stars: 4, percentage: 2 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  const GOOGLE_REVIEWS = [
    {
      author: 'Verified Google Guest',
      context: 'Google Review · Dwaraka Nagar',
      serviceHighlight: 'Skin Care & Full Service',
      quote: 'They have done service with loads of patience and very customer centric....',
    },
    {
      author: 'Verified Google Guest',
      context: 'Google Review · Visakhapatnam',
      serviceHighlight: 'Haircut & Styling',
      quote: 'Good response kind and heart and wonderful haircut and style at low price',
    },
    {
      author: 'Verified Google Guest',
      context: 'Google Review · Resapuvanipalem',
      serviceHighlight: 'Grooming Experience',
      quote:
        'Highly recommend it to anyone looking for a quality grooming experience! for all your beauty needs in one convenient location.',
    },
  ];

  const SPECIALISTS = [
    { id: 'any', label: 'Any Available Specialist', role: 'Fastest confirmation' },
    { id: 'hair', label: 'Senior Hair Stylist', role: 'Haircuts, blow dry & extensions' },
    { id: 'bridal', label: 'Bridal & Make-up Artist', role: 'Weddings & event prep' },
    { id: 'skin', label: 'Skin & Spa Therapist', role: 'Facials, acne & massage' },
  ];

  const SALON_TIME_SLOTS = [
    { label: '09:30 AM', hour24: 9, minute: 30 },
    { label: '10:30 AM', hour24: 10, minute: 30 },
    { label: '11:30 AM', hour24: 11, minute: 30 },
    { label: '12:30 PM', hour24: 12, minute: 30 },
    { label: '02:00 PM', hour24: 14, minute: 0 },
    { label: '03:00 PM', hour24: 15, minute: 0 },
    { label: '04:00 PM', hour24: 16, minute: 0 },
    { label: '05:00 PM', hour24: 17, minute: 0 },
    { label: '06:00 PM', hour24: 18, minute: 0 },
    { label: '07:00 PM', hour24: 19, minute: 0 },
    { label: '08:00 PM', hour24: 20, minute: 0 },
    { label: '09:00 PM', hour24: 21, minute: 0 },
  ];

  function getUpcomingDays(count) {
    const days = [];
    const now = new Date();
    for (let i = 0; i < count; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      days.push({
        isoDate: `${yyyy}-${mm}-${dd}`,
        weekdayShort: i === 0 ? 'Today' : d.toLocaleDateString('en-IN', { weekday: 'short' }),
        dayNum: String(d.getDate()),
        monthShort: d.toLocaleDateString('en-IN', { month: 'short' }),
        isToday: i === 0,
      });
    }
    return days;
  }

  function isSlotPastToday(slot, isToday) {
    if (!isToday) return false;
    const now = new Date();
    const slotTime = new Date(now);
    slotTime.setHours(slot.hour24, slot.minute, 0, 0);
    return slotTime.getTime() <= now.getTime() + 30 * 60 * 1000;
  }

  function formatINR(num) {
    return Number(num).toLocaleString('en-IN');
  }

  // Application State
  const upcomingDays = getUpcomingDays(14);
  const state = {
    selectedServiceIds: ['haircut'],
    serviceCategory: 'All',
    heroIndex: 0,
    heroPaused: false,
    galleryFilter: 'All',
    galleryIndex: 0,
    bookingMode: 'appointment',
    selectedIsoDate: upcomingDays[0].isoDate,
    selectedTimeSlot: '',
    specialistId: 'any',
    lastReceiptMessage: '',
  };

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // Navigation & Mobile Drawer
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  const navBookBtn = document.getElementById('nav-book-btn');
  const mobileBookBtn = document.getElementById('mobile-book-btn');

  function setMobileDrawer(open) {
    mobileDrawer.classList.toggle('hidden', !open);
    iconMenu.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
    mobileToggleBtn.setAttribute('aria-expanded', String(open));
    mobileToggleBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  }

  mobileToggleBtn.addEventListener('click', () => {
    const isOpen = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
    setMobileDrawer(!isOpen);
  });

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => setMobileDrawer(false));
  });

  navBookBtn.addEventListener('click', () => scrollToSection('booking'));
  mobileBookBtn.addEventListener('click', () => {
    setMobileDrawer(false);
    scrollToSection('booking');
  });
  document.getElementById('hero-book-btn').addEventListener('click', () => scrollToSection('booking'));
  document.getElementById('hero-services-btn').addEventListener('click', () => scrollToSection('services'));

  // Hero Image Slider
  const heroSlidesTrack = document.getElementById('hero-slides-track');
  const heroDots = document.getElementById('hero-dots');
  const heroSlideMeta = document.getElementById('hero-slide-meta');
  const heroSlideTitle = document.getElementById('hero-slide-title');
  const heroSlideDesc = document.getElementById('hero-slide-desc');
  const heroSliderEl = document.getElementById('hero-slider');

  function initHeroSlider() {
    HERO_SLIDES.forEach((slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = `hero-slide${index === 0 ? ' active' : ''}`;
      slideDiv.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');

      const img = document.createElement('img');
      img.src = slide.imageSrc;
      img.alt = slide.alt;
      img.referrerPolicy = 'no-referrer';
      img.addEventListener('error', () => {
        img.classList.add('hidden');
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';
        fallback.textContent = slide.title;
        slideDiv.appendChild(fallback);
      });
      slideDiv.appendChild(img);
      heroSlidesTrack.appendChild(slideDiv);

      const dotBtn = document.createElement('button');
      dotBtn.type = 'button';
      dotBtn.className = `hero-dot${index === 0 ? ' active' : ''}`;
      dotBtn.setAttribute('aria-label', `Go to slide ${index + 1}: ${slide.title}`);
      dotBtn.addEventListener('click', () => {
        state.heroIndex = index;
        renderHeroSlide();
      });
      heroDots.appendChild(dotBtn);
    });
    renderHeroSlide();
  }

  function renderHeroSlide() {
    const slide = HERO_SLIDES[state.heroIndex];
    const slideNodes = heroSlidesTrack.querySelectorAll('.hero-slide');
    const dotNodes = heroDots.querySelectorAll('.hero-dot');

    slideNodes.forEach((el, idx) => {
      const active = idx === state.heroIndex;
      el.classList.toggle('active', active);
      el.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    dotNodes.forEach((el, idx) => {
      el.classList.toggle('active', idx === state.heroIndex);
    });

    heroSlideMeta.textContent = `${slide.category} · ${slide.detail}`;
    heroSlideTitle.textContent = slide.title;
    heroSlideDesc.textContent = slide.caption;
  }

  document.getElementById('hero-prev').addEventListener('click', () => {
    state.heroIndex = (state.heroIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    renderHeroSlide();
  });

  document.getElementById('hero-next').addEventListener('click', () => {
    state.heroIndex = (state.heroIndex + 1) % HERO_SLIDES.length;
    renderHeroSlide();
  });

  heroSliderEl.addEventListener('mouseenter', () => {
    state.heroPaused = true;
  });
  heroSliderEl.addEventListener('mouseleave', () => {
    state.heroPaused = false;
  });

  window.setInterval(() => {
    if (!state.heroPaused) {
      state.heroIndex = (state.heroIndex + 1) % HERO_SLIDES.length;
      renderHeroSlide();
    }
  }, 5500);

  // Services Menu & Syncing
  const serviceTabsEl = document.getElementById('service-tabs');
  const servicesGridEl = document.getElementById('services-grid');
  const scheduleSelectedBtn = document.getElementById('schedule-selected-btn');

  scheduleSelectedBtn.addEventListener('click', () => scrollToSection('booking'));

  function toggleService(serviceId) {
    if (state.selectedServiceIds.includes(serviceId)) {
      state.selectedServiceIds = state.selectedServiceIds.filter((id) => id !== serviceId);
    } else {
      state.selectedServiceIds = [...state.selectedServiceIds, serviceId];
    }
    updateSelectionUI();
  }

  function renderServiceTabs() {
    serviceTabsEl.innerHTML = '';
    const allTabs = ['All', ...SERVICE_CATEGORIES];
    allTabs.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.role = 'tab';
      const isSelected = state.serviceCategory === cat;
      btn.setAttribute('aria-selected', String(isSelected));
      btn.className = `tab-btn${isSelected ? ' active' : ''}`;
      btn.textContent = cat === 'All' ? `All Services (${SALON_SERVICES.length})` : cat;
      btn.addEventListener('click', () => {
        state.serviceCategory = cat;
        renderServiceTabs();
        renderServicesGrid();
      });
      serviceTabsEl.appendChild(btn);
    });
  }

  function renderServicesGrid() {
    servicesGridEl.innerHTML = '';
    const filtered =
      state.serviceCategory === 'All'
        ? SALON_SERVICES
        : SALON_SERVICES.filter((s) => s.category === state.serviceCategory);

    filtered.forEach((service, idx) => {
      const isSelected = state.selectedServiceIds.includes(service.id);
      const item = document.createElement('div');
      item.className = `service-item${isSelected ? ' selected' : ''}`;

      item.innerHTML = `
        <div class="service-main">
          <div class="service-title-row">
            <span class="service-index tabular-nums">${String(idx + 1).padStart(2, '0')}.</span>
            <h3 class="service-name">${service.name}</h3>
          </div>
          <p class="service-desc">${service.description}</p>
          <div class="service-meta tabular-nums">
            <span>${service.category}</span>
            <span aria-hidden="true">·</span>
            <span>${service.durationMins} mins</span>
            <span aria-hidden="true">·</span>
            <span class="service-price">From ₹${formatINR(service.priceFrom)}</span>
          </div>
        </div>
      `;

      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = `service-toggle-btn${isSelected ? ' selected' : ''}`;
      toggleBtn.setAttribute('aria-pressed', String(isSelected));
      toggleBtn.textContent = isSelected ? '✓ Added' : '+ Add';
      toggleBtn.addEventListener('click', () => toggleService(service.id));

      item.appendChild(toggleBtn);
      servicesGridEl.appendChild(item);
    });
  }

  // Photo Gallery Slider & Lightbox
  const galleryTabsEl = document.getElementById('gallery-tabs');
  const galleryStageEl = document.getElementById('gallery-stage');
  const galleryMainImg = document.getElementById('gallery-main-img');
  const galleryFallback = document.getElementById('gallery-fallback');
  const galleryFallbackTitle = document.getElementById('gallery-fallback-title');
  const galleryCounter = document.getElementById('gallery-counter');
  const galleryMeta = document.getElementById('gallery-meta');
  const galleryTitle = document.getElementById('gallery-title');
  const galleryCaption = document.getElementById('gallery-caption');
  const galleryThumbsEl = document.getElementById('gallery-thumbs');
  const galleryArrowsEl = document.getElementById('gallery-arrows');

  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxArrows = document.getElementById('lightbox-arrows');

  function getFilteredGallery() {
    return state.galleryFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === state.galleryFilter);
  }

  galleryMainImg.addEventListener('error', () => {
    galleryMainImg.classList.add('hidden');
    galleryFallback.classList.remove('hidden');
  });

  function renderGalleryTabs() {
    galleryTabsEl.innerHTML = '';
    GALLERY_FILTERS.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.role = 'tab';
      const active = state.galleryFilter === cat;
      btn.setAttribute('aria-selected', String(active));
      btn.className = `tab-btn${active ? ' active' : ''}`;
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        state.galleryFilter = cat;
        state.galleryIndex = 0;
        renderGalleryTabs();
        renderGallery();
      });
      galleryTabsEl.appendChild(btn);
    });
  }

  function renderGallery() {
    const items = getFilteredGallery();
    if (state.galleryIndex >= items.length) state.galleryIndex = 0;
    const current = items[state.galleryIndex];

    galleryMainImg.classList.remove('hidden');
    galleryFallback.classList.add('hidden');
    galleryMainImg.src = current.imageSrc;
    galleryMainImg.alt = current.alt;
    galleryFallbackTitle.textContent = current.title;

    galleryCounter.textContent = `${String(state.galleryIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
    galleryMeta.textContent = `${current.category} · ${current.detail}`;
    galleryTitle.textContent = current.title;
    galleryCaption.textContent = current.caption;

    const showArrows = items.length > 1;
    galleryArrowsEl.classList.toggle('hidden', !showArrows);
    lightboxArrows.classList.toggle('hidden', !showArrows);

    if (!lightboxModal.classList.contains('hidden')) {
      lightboxImg.src = current.imageSrc;
      lightboxImg.alt = current.alt;
      lightboxTitle.textContent = current.title;
      lightboxCaption.textContent = current.caption;
    }

    galleryThumbsEl.innerHTML = '';
    items.forEach((item, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `thumb-btn${idx === state.galleryIndex ? ' active' : ''}`;
      btn.innerHTML = `
        <div class="thumb-img-wrap">
          <img src="${item.imageSrc}" alt="${item.alt}" referrerpolicy="no-referrer" loading="lazy" />
        </div>
        <div class="thumb-text">
          <p class="thumb-cat">${item.category}</p>
          <p class="thumb-title">${item.title}</p>
        </div>
      `;
      btn.addEventListener('click', () => {
        state.galleryIndex = idx;
        renderGallery();
      });
      galleryThumbsEl.appendChild(btn);
    });
  }

  function prevGallery() {
    const items = getFilteredGallery();
    state.galleryIndex = (state.galleryIndex - 1 + items.length) % items.length;
    renderGallery();
  }

  function nextGallery() {
    const items = getFilteredGallery();
    state.galleryIndex = (state.galleryIndex + 1) % items.length;
    renderGallery();
  }

  document.getElementById('gallery-prev').addEventListener('click', prevGallery);
  document.getElementById('gallery-next').addEventListener('click', nextGallery);
  document.getElementById('lightbox-prev').addEventListener('click', prevGallery);
  document.getElementById('lightbox-next').addEventListener('click', nextGallery);

  document.getElementById('gallery-expand-btn').addEventListener('click', () => {
    const current = getFilteredGallery()[state.galleryIndex];
    lightboxImg.src = current.imageSrc;
    lightboxImg.alt = current.alt;
    lightboxTitle.textContent = current.title;
    lightboxCaption.textContent = current.caption;
    lightboxModal.classList.remove('hidden');
  });

  document.getElementById('lightbox-close').addEventListener('click', () => {
    lightboxModal.classList.add('hidden');
  });

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('hidden')) {
      if (e.key === 'Escape') lightboxModal.classList.add('hidden');
      if (e.key === 'ArrowLeft') prevGallery();
      if (e.key === 'ArrowRight') nextGallery();
    }
  });

  let touchStartX = null;
  galleryStageEl.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );
  galleryStageEl.addEventListener(
    'touchend',
    (e) => {
      if (touchStartX === null) return;
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextGallery();
        else prevGallery();
      }
      touchStartX = null;
    },
    { passive: true }
  );

  // Google Reviews Rendering
  function renderReviews() {
    const ratingBarsEl = document.getElementById('rating-bars');
    const reviewsListEl = document.getElementById('reviews-list');

    ratingBarsEl.innerHTML = GOOGLE_REVIEW_BREAKDOWN.map(
      (row) => `
      <div class="rating-bar-row tabular-nums">
        <span class="rating-bar-num">${row.stars}</span>
        <div class="rating-bar-track">
          <div class="rating-bar-fill" style="width: ${row.percentage}%"></div>
        </div>
        <span class="rating-bar-pct">${row.percentage}%</span>
      </div>
    `
    ).join('');

    const starSvg =
      '<svg class="star-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';

    reviewsListEl.innerHTML = GOOGLE_REVIEWS.map(
      (rev) => `
      <article class="review-card">
        <div class="review-card-top">
          <div class="stars" aria-label="5 stars">${starSvg.repeat(5)}</div>
          <p class="review-service">${rev.serviceHighlight}</p>
        </div>
        <blockquote class="review-quote">&ldquo;${rev.quote}&rdquo;</blockquote>
        <div class="review-footer">
          <span class="review-author">${rev.author}</span>
          <span>${rev.context}</span>
        </div>
      </article>
    `
    ).join('');
  }

  // Dynamic Booking & Enquiry System + WhatsApp Integration
  const modeAppointmentBtn = document.getElementById('mode-appointment');
  const modeEnquiryBtn = document.getElementById('mode-enquiry');
  const bookingFormEl = document.getElementById('booking-form');
  const bookingReceiptEl = document.getElementById('booking-receipt');
  const scheduleStepEl = document.getElementById('schedule-step');
  const detailsStepTitleEl = document.getElementById('details-step-title');
  const notesLabelEl = document.getElementById('notes-label');
  const customerNotesEl = document.getElementById('customer-notes');
  const submitBtnLabelEl = document.getElementById('submit-btn-label');
  const clearServicesBtn = document.getElementById('clear-services-btn');
  const bookingServicesPickerEl = document.getElementById('booking-services-picker');
  const dateStripEl = document.getElementById('date-strip');
  const timeSlotsGridEl = document.getElementById('time-slots-grid');
  const specialistsGridEl = document.getElementById('specialists-grid');
  const bookingSummaryBoxEl = document.getElementById('booking-summary-box');

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const emailInput = document.getElementById('customer-email');
  const errorName = document.getElementById('error-name');
  const errorPhone = document.getElementById('error-phone');
  const errorEmail = document.getElementById('error-email');
  const errorTimeSlot = document.getElementById('error-timeslot');

  function setBookingMode(mode) {
    state.bookingMode = mode;
    const isAppt = mode === 'appointment';

    modeAppointmentBtn.classList.toggle('active', isAppt);
    modeAppointmentBtn.setAttribute('aria-selected', String(isAppt));
    modeEnquiryBtn.classList.toggle('active', !isAppt);
    modeEnquiryBtn.setAttribute('aria-selected', String(!isAppt));

    scheduleStepEl.classList.toggle('hidden', !isAppt);
    detailsStepTitleEl.textContent = isAppt ? '03. Your Details' : '02. Enquiry Details';
    notesLabelEl.textContent = isAppt
      ? 'Style Notes or Preferences'
      : 'Enquiry Details (Bridal Dates, Packages, Pricing)';
    customerNotesEl.placeholder = isAppt
      ? 'Any skin sensitivities, hair length notes, or preferred look...'
      : 'Tell us about your event date, hair goals, or questions...';
    submitBtnLabelEl.textContent = isAppt
      ? 'Confirm & Notify via WhatsApp'
      : 'Submit Enquiry via WhatsApp';

    if (!isAppt) {
      errorTimeSlot.classList.add('hidden');
    }

    bookingFormEl.classList.remove('hidden');
    bookingReceiptEl.classList.add('hidden');
    renderBookingSummaryBox();
  }

  modeAppointmentBtn.addEventListener('click', () => setBookingMode('appointment'));
  modeEnquiryBtn.addEventListener('click', () => setBookingMode('enquiry'));

  clearServicesBtn.addEventListener('click', () => {
    state.selectedServiceIds = [];
    updateSelectionUI();
  });

  function renderBookingServicesPicker() {
    bookingServicesPickerEl.innerHTML = '';
    SERVICE_CATEGORIES.forEach((cat) => {
      const catWrap = document.createElement('div');
      const catTitle = document.createElement('p');
      catTitle.className = 'picker-cat-label';
      catTitle.textContent = cat;
      catWrap.appendChild(catTitle);

      const chipWrap = document.createElement('div');
      chipWrap.className = 'picker-chip-wrap';

      SALON_SERVICES.filter((s) => s.category === cat).forEach((service) => {
        const active = state.selectedServiceIds.includes(service.id);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `picker-service-btn${active ? ' active' : ''}`;
        btn.setAttribute('aria-pressed', String(active));
        btn.innerHTML = `
          ${active ? '<span>✓</span>' : ''}
          <span>${service.name}</span>
          <span class="picker-price tabular-nums">₹${formatINR(service.priceFrom)}</span>
        `;
        btn.addEventListener('click', () => toggleService(service.id));
        chipWrap.appendChild(btn);
      });

      catWrap.appendChild(chipWrap);
      bookingServicesPickerEl.appendChild(catWrap);
    });
  }

  function renderDateStrip() {
    dateStripEl.innerHTML = '';
    upcomingDays.forEach((day) => {
      const active = day.isoDate === state.selectedIsoDate;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `date-btn${active ? ' active' : ''}`;
      btn.setAttribute('aria-pressed', String(active));
      btn.innerHTML = `
        <span class="date-weekday">${day.weekdayShort}</span>
        <span class="date-daynum tabular-nums">${day.dayNum}</span>
        <span class="date-month">${day.monthShort}</span>
      `;
      btn.addEventListener('click', () => {
        state.selectedIsoDate = day.isoDate;
        if (day.isToday && state.selectedTimeSlot) {
          const slotObj = SALON_TIME_SLOTS.find((t) => t.label === state.selectedTimeSlot);
          if (slotObj && isSlotPastToday(slotObj, true)) {
            state.selectedTimeSlot = '';
          }
        }
        renderDateStrip();
        renderTimeSlots();
        renderBookingSummaryBox();
      });
      dateStripEl.appendChild(btn);
    });
  }

  function renderTimeSlots() {
    timeSlotsGridEl.innerHTML = '';
    const activeDay = upcomingDays.find((d) => d.isoDate === state.selectedIsoDate) || upcomingDays[0];

    SALON_TIME_SLOTS.forEach((slot) => {
      const disabled = isSlotPastToday(slot, activeDay.isToday);
      const active = state.selectedTimeSlot === slot.label;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.disabled = disabled;
      btn.className = `slot-btn tabular-nums${active ? ' active' : ''}`;
      btn.setAttribute('aria-pressed', String(active));
      btn.textContent = slot.label;
      btn.addEventListener('click', () => {
        state.selectedTimeSlot = slot.label;
        errorTimeSlot.classList.add('hidden');
        renderTimeSlots();
        renderBookingSummaryBox();
      });
      timeSlotsGridEl.appendChild(btn);
    });
  }

  function renderSpecialists() {
    specialistsGridEl.innerHTML = '';
    SPECIALISTS.forEach((sp) => {
      const active = state.specialistId === sp.id;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `specialist-btn${active ? ' active' : ''}`;
      btn.setAttribute('aria-pressed', String(active));
      btn.innerHTML = `
        <p class="specialist-name">${sp.label}</p>
        <p class="specialist-role">${sp.role}</p>
      `;
      btn.addEventListener('click', () => {
        state.specialistId = sp.id;
        renderSpecialists();
      });
      specialistsGridEl.appendChild(btn);
    });
  }

  function renderBookingSummaryBox() {
    const selected = SALON_SERVICES.filter((s) => state.selectedServiceIds.includes(s.id));
    const totalEstimate = selected.reduce((sum, s) => sum + s.priceFrom, 0);
    const totalDuration = selected.reduce((sum, s) => sum + s.durationMins, 0);
    const activeDay = upcomingDays.find((d) => d.isoDate === state.selectedIsoDate) || upcomingDays[0];

    let html = `
      <div class="summary-row">
        <span>Selected Services</span>
        <span class="summary-strong tabular-nums">${selected.length > 0 ? `${selected.length} chosen` : 'General Enquiry'}</span>
      </div>
    `;

    if (selected.length > 0) {
      html += `
        <div class="summary-row summary-row-border tabular-nums">
          <span>Estimated Starting Total (~${totalDuration} mins)</span>
          <span class="summary-strong">₹${formatINR(totalEstimate)}</span>
        </div>
      `;
    }

    if (state.bookingMode === 'appointment') {
      const timeSuffix = state.selectedTimeSlot ? ` · ${state.selectedTimeSlot}` : '';
      html += `
        <div class="summary-row summary-row-border tabular-nums">
          <span>Schedule</span>
          <span class="summary-strong">${activeDay.weekdayShort}, ${activeDay.dayNum} ${activeDay.monthShort}${timeSuffix}</span>
        </div>
      `;
    }

    bookingSummaryBoxEl.innerHTML = html;
  }

  function updateSelectionUI() {
    const count = state.selectedServiceIds.length;
    navBookBtn.textContent = count > 0 ? `Book Now (${count})` : 'Book Now';
    mobileBookBtn.textContent = count > 0 ? `Book Appointment (${count})` : 'Book Appointment';

    if (count > 0) {
      scheduleSelectedBtn.classList.remove('hidden');
      scheduleSelectedBtn.textContent = `Schedule ${count} Selected ${count === 1 ? 'Service' : 'Services'}`;
      clearServicesBtn.classList.remove('hidden');
      clearServicesBtn.textContent = `Clear all (${count})`;
    } else {
      scheduleSelectedBtn.classList.add('hidden');
      clearServicesBtn.classList.add('hidden');
    }

    renderServicesGrid();
    renderBookingServicesPicker();
    renderBookingSummaryBox();
  }

  function clearFieldErrors() {
    errorName.classList.add('hidden');
    errorPhone.classList.add('hidden');
    errorEmail.classList.add('hidden');
    errorTimeSlot.classList.add('hidden');
  }

  nameInput.addEventListener('input', () => errorName.classList.add('hidden'));
  phoneInput.addEventListener('input', () => errorPhone.classList.add('hidden'));
  emailInput.addEventListener('input', () => errorEmail.classList.add('hidden'));

  function buildWhatsAppMessage(params) {
    const serviceList =
      params.selectedServices.length > 0
        ? params.selectedServices.map((s) => `• ${s.name} (from ₹${s.priceFrom})`).join('\n')
        : '• General Consultation / Custom Service';

    const totalEstimate = params.selectedServices.reduce((sum, s) => sum + s.priceFrom, 0);
    const totalDuration = params.selectedServices.reduce((sum, s) => sum + s.durationMins, 0);

    const lines = [
      `*SP UNISEX SALON — ${params.mode === 'appointment' ? 'NEW APPOINTMENT REQUEST' : 'NEW SERVICE ENQUIRY'}*`,
      `Ref: ${params.referenceId}`,
      '',
      '*Customer Details*',
      `Name: ${params.customerName}`,
      `Phone: ${params.customerPhone}`,
      ...(params.customerEmail ? [`Email: ${params.customerEmail}`] : []),
      '',
      '*Requested Services*',
      serviceList,
    ];

    if (params.selectedServices.length > 0) {
      lines.push(
        `Estimated Starting Total: ₹${formatINR(totalEstimate)} (~${totalDuration} mins)`
      );
    }

    if (params.mode === 'appointment') {
      lines.push(
        '',
        '*Preferred Schedule*',
        `Date: ${params.dateLabel}`,
        `Time: ${params.timeSlot}`,
        `Specialist: ${params.specialistLabel}`
      );
    }

    if (params.notes) {
      lines.push('', '*Customer Notes*', params.notes);
    }

    lines.push('', 'Sent via SP Unisex Salon Online Booking');
    return lines.join('\n');
  }

  bookingFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFieldErrors();

    const customerName = nameInput.value.trim();
    const customerPhone = phoneInput.value.trim();
    const customerEmail = emailInput.value.trim();
    const notes = customerNotesEl.value.trim();
    const digitsOnly = customerPhone.replace(/\D/g, '');

    let valid = true;

    if (customerName.length < 2) {
      errorName.textContent = 'Please enter your full name.';
      errorName.classList.remove('hidden');
      valid = false;
    }

    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      errorPhone.textContent = 'Please enter a valid 10-digit mobile number.';
      errorPhone.classList.remove('hidden');
      valid = false;
    }

    if (customerEmail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      errorEmail.textContent = 'Please enter a valid email address.';
      errorEmail.classList.remove('hidden');
      valid = false;
    }

    if (state.bookingMode === 'appointment' && !state.selectedTimeSlot) {
      errorTimeSlot.textContent = 'Please choose a preferred time slot.';
      errorTimeSlot.classList.remove('hidden');
      valid = false;
    }

    if (!valid) return;

    const referenceId = `SP-${Math.floor(1000 + Math.random() * 9000)}`;
    const activeDay = upcomingDays.find((d) => d.isoDate === state.selectedIsoDate) || upcomingDays[0];
    const dateLabel = `${activeDay.weekdayShort}, ${activeDay.dayNum} ${activeDay.monthShort}`;
    const specialistLabel =
      (SPECIALISTS.find((sp) => sp.id === state.specialistId) || SPECIALISTS[0]).label;
    const selectedServices = SALON_SERVICES.filter((s) =>
      state.selectedServiceIds.includes(s.id)
    );

    const whatsappMessage = buildWhatsAppMessage({
      referenceId,
      mode: state.bookingMode,
      customerName,
      customerPhone,
      customerEmail,
      selectedServices,
      dateLabel,
      timeSlot: state.selectedTimeSlot || 'Flexible',
      specialistLabel,
      notes,
    });

    state.lastReceiptMessage = whatsappMessage;
    const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    document.getElementById('receipt-ref').textContent = `Reference #${referenceId}`;
    document.getElementById('receipt-heading').textContent =
      state.bookingMode === 'appointment'
        ? 'Appointment Ready for WhatsApp Confirmation'
        : 'Enquiry Ready to Send on WhatsApp';

    const servicesHtml =
      selectedServices.length > 0
        ? `<ul class="receipt-service-list">${selectedServices
            .map(
              (s) =>
                `<li class="tabular-nums"><span>${s.name}</span><span style="color:#57534E">From ₹${formatINR(s.priceFrom)}</span></li>`
            )
            .join('')}</ul>`
        : '<p class="receipt-detail-value">General Consultation / Custom Service</p>';

    const scheduleHtml =
      state.bookingMode === 'appointment'
        ? `
          <div>
            <p class="receipt-detail-label">Requested Schedule</p>
            <p class="receipt-detail-value tabular-nums">${dateLabel} at ${state.selectedTimeSlot}</p>
            <p class="receipt-detail-label">${specialistLabel}</p>
          </div>
        `
        : '';

    document.getElementById('receipt-details').innerHTML = `
      <div>
        <p class="receipt-detail-label">Guest</p>
        <p class="receipt-detail-value">${customerName} · <span class="tabular-nums">${customerPhone}</span></p>
      </div>
      ${scheduleHtml}
      <div>
        <p class="receipt-detail-label">Selected Services</p>
        ${servicesHtml}
      </div>
    `;

    document.getElementById('receipt-message-preview').textContent = whatsappMessage;
    document.getElementById('receipt-whatsapp-link').href = whatsappUrl;
    document.getElementById('receipt-copy-btn').textContent = 'Copy Message';

    bookingFormEl.classList.add('hidden');
    bookingReceiptEl.classList.remove('hidden');
  });

  document.getElementById('receipt-edit-btn').addEventListener('click', () => {
    bookingReceiptEl.classList.add('hidden');
    bookingFormEl.classList.remove('hidden');
  });

  document.getElementById('receipt-copy-btn').addEventListener('click', async () => {
    const btn = document.getElementById('receipt-copy-btn');
    if (!state.lastReceiptMessage) return;
    try {
      await navigator.clipboard.writeText(state.lastReceiptMessage);
      btn.textContent = 'Details Copied';
      window.setTimeout(() => {
        btn.textContent = 'Copy Message';
      }, 2500);
    } catch {
      btn.textContent = 'Copy Message';
    }
  });

  // Share Salon Button
  document.getElementById('share-salon-btn').addEventListener('click', async () => {
    const btn = document.getElementById('share-salon-btn');
    const shareText = `${SALON_INFO.name} — ${SALON_INFO.fullAddress}. Call ${SALON_INFO.phoneDisplay}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: SALON_INFO.name,
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(`${shareText} (${window.location.href})`);
      btn.textContent = 'Link Copied';
      window.setTimeout(() => {
        btn.textContent = 'Share';
      }, 2500);
    } catch {
      btn.textContent = 'Share';
    }
  });

  // Initial Render
  initHeroSlider();
  renderServiceTabs();
  renderGalleryTabs();
  renderGallery();
  renderReviews();
  renderDateStrip();
  renderTimeSlots();
  renderSpecialists();
  updateSelectionUI();
})();
