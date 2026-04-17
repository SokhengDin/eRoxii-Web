"use client";

export type Lang = "en" | "km";

export const TRANSLATIONS = {
  en: {
    nav: { home: "Home", products: "Products", useCases: "Use Cases", blog: "Blog", contact: "Contact" },
    hero: {
      eyebrow: "DEEP-TECH · CAMBODIA · EST. 2024",
      h1a: "Intelligent Infrastructure.",
      h1b: "Built for the Real World.",
      sub: "eRoxii engineers AI vision systems and IoT platforms deployed at scale — from smart parking gates to solar energy grids across Cambodia.",
      cta1: "Explore Products",
      cta2: "View Live Demo",
    },
    dash: {
      label: "LIVE · STATION 03",
      plateHeader: "PLATE DETECTED",
      status: "ACCESS GRANTED",
      gate: "GATE 03 · OPEN",
      confidence: "OCR CONFIDENCE",
      latency: "INFERENCE LATENCY",
      energy: "GRID OUTPUT · LAST 24H",
      kwhNow: "NOW",
    },
    stats: [
      { n: "8", l: "ALPR Stations Deployed" },
      { n: "1", l: "Solar Grid Monitored" },
      { n: "DNN", l: "Trained on Cambodia Plates" },
      { n: "RT", l: "Real-Time Gate Control" },
    ],
    products: {
      tag: "— PRODUCTS —",
      title: "Hardware + AI, shipping today.",
      sub: "Two production systems, both live in the field. One network, one grid, one codebase.",
      a: {
        title: "AI-Powered License Plate Recognition",
        body: "Deployed across 8 stations, our system uses a custom YOLOv8 + OCR model trained on Cambodian license plates. Gate relay hardware controls physical access. Only authorized plates enter — automated, real-time, tamper-resistant.",
        tags: ["Computer Vision", "Edge Hardware", "Gate Automation", "Cambodian OCR"],
        link: "View Live Dashboard",
        kicker: "PRODUCT · 01",
        heading: "Smart ALPR Parking System",
      },
      b: {
        title: "Real-Time Solar Energy Monitoring",
        body: "IoT-connected hardware deployed on solar installations streams live energy generation data. Track consumption trends, generation peaks, and grid health — all in a live dashboard.",
        tags: ["IoT", "TimescaleDB", "Energy Analytics", "Real-Time"],
        link: "View Solar Dashboard",
        kicker: "PRODUCT · 02",
        heading: "Solar IoT Monitoring",
      },
    },
    how: {
      tag: "— HOW IT WORKS —",
      title: "From plate to gate in under 400ms.",
      steps: [
        { n: "01", t: "Capture", body: "An edge camera grabs a frame the instant a vehicle triggers the loop sensor." },
        { n: "02", t: "Detect + Read", body: "YOLOv8 locates the plate, OCR decodes characters against our Cambodian plate model." },
        { n: "03", t: "Actuate + Log", body: "Authorized plate → gate relay fires. Every event is logged to the operator dashboard." },
      ],
    },
    investor: {
      tag: "— FOR OPERATORS & INVESTORS —",
      h: "Beyond Parking — A National Data Infrastructure.",
      body: "Each ALPR station is a data node. Together they form a real-time intelligence layer for parking operators, property managers, and investors — tracking occupancy, revenue, and fleet movement across the country.",
      cta: "Talk to Us About Partnerships",
      metrics: [
        { k: "OCCUPANCY", v: "Live" },
        { k: "REVENUE", v: "Per-station" },
        { k: "FLEET", v: "Nationwide" },
      ],
    },
    blog: {
      tag: "— FROM THE BLOG —",
      title: "Engineering notes from the field.",
      meta: "FEB 19, 2026  ·  CASE STUDY",
      post: {
        title: "Building a Production Smart Parking System — From Gate to Payment",
        excerpt: "A deep-dive into our full production stack: from hardware relay wiring and Modbus RTU to Docker Swarm, YOLOv8 TensorRT inference, and live dashboard deployment.",
        cta: "Read the Case Study",
      },
    },
    footer: {
      tagline: "ElectRobonics Matrix and Innovative Integration",
      products: "Products",
      dashboards: "Dashboards",
      blog: "Blog",
      contact: "Contact",
      loc: "Cambodia",
      rights: "© 2026 eRoxii. All rights reserved.",
      builtIn: "Built in Phnom Penh",
    },
  },
  km: {
    nav: { home: "ទំព័រដើម", products: "ផលិតផល", useCases: "ករណីប្រើប្រាស់", blog: "ប្លុក", contact: "ទំនាក់ទំនង" },
    hero: {
      eyebrow: "បច្ចេកវិទ្យាស៊ីជម្រៅ · កម្ពុជា · ឆ្នាំ ២០២៤",
      h1a: "ហេដ្ឋារចនាសម្ព័ន្ធឆ្លាតវៃ។",
      h1b: "កសាងសម្រាប់ពិភពពិត។",
      sub: "eRoxii បង្កើតប្រព័ន្ធមើលឃើញដោយ AI និងវេទិកា IoT ដាក់ឱ្យដំណើរការក្នុងទំហំធំ — ពីច្រកចូលចតឡានឆ្លាតវៃ ដល់បណ្តាញថាមពលពន្លឺព្រះអាទិត្យនៅទូទាំងប្រទេសកម្ពុជា។",
      cta1: "ស្វែងយល់ពីផលិតផល",
      cta2: "មើលការបង្ហាញផ្ទាល់",
    },
    dash: {
      label: "ផ្ទាល់ · ស្ថានីយ៍ ០៣",
      plateHeader: "ផ្ទាំងលេខបានរកឃើញ",
      status: "អនុញ្ញាតឱ្យចូល",
      gate: "ច្រក ០៣ · បើក",
      confidence: "ភាពជឿជាក់ OCR",
      latency: "ល្បឿនវិភាគ",
      energy: "ថាមពលផលិត · ២៤ម៉ោងចុងក្រោយ",
      kwhNow: "ឥឡូវ",
    },
    stats: [
      { n: "៨", l: "ស្ថានីយ៍ ALPR ដំណើរការ" },
      { n: "១", l: "បណ្តាញព្រះអាទិត្យ" },
      { n: "DNN", l: "បង្វឹកលើផ្ទាំងលេខកម្ពុជា" },
      { n: "RT", l: "គ្រប់គ្រងច្រកពេលវេលាពិត" },
    ],
    products: {
      tag: "— ផលិតផល —",
      title: "ហាឌ៍វែរ + AI ដាក់ឱ្យដំណើរការហើយ។",
      sub: "ប្រព័ន្ធពីរផលិតកម្ម ទាំងពីរដំណើរការក្នុងភូមិភាគ។ បណ្តាញមួយ បណ្តាញថាមពលមួយ កូដមួយ។",
      a: {
        title: "ការស្គាល់ផ្ទាំងលេខដោយ AI",
        body: "ដាក់ឱ្យដំណើរការនៅ៨ស្ថានីយ៍ ប្រព័ន្ធរបស់យើងប្រើ YOLOv8 + OCR ដែលបង្វឹកលើផ្ទាំងលេខកម្ពុជា។ ហាឌ៍វែរ Relay គ្រប់គ្រងការចូល។ មានតែផ្ទាំងលេខដែលអនុញ្ញាតប៉ុណ្ណោះដែលអាចចូលបាន — ស្វ័យប្រវត្តិ ពេលវេលាពិត ការពារការលួច។",
        tags: ["កុំព្យូទ័រមើលឃើញ", "Edge Hardware", "ស្វ័យប្រវត្តិច្រក", "OCR កម្ពុជា"],
        link: "មើល Dashboard ផ្ទាល់",
        kicker: "ផលិតផល · ០១",
        heading: "ប្រព័ន្ធចតឡាន ALPR ឆ្លាតវៃ",
      },
      b: {
        title: "ការតាមដានថាមពលព្រះអាទិត្យពេលវេលាពិត",
        body: "ហាឌ៍វែរ IoT ដែលតភ្ជាប់លើការដំឡើងព្រះអាទិត្យ បញ្ជូនទិន្នន័យផលិតថាមពលផ្ទាល់។ តាមដាននិន្នាការប្រើប្រាស់ កំពូលផលិត និងសុខភាពបណ្តាញ — ទាំងអស់ក្នុង Dashboard ផ្ទាល់។",
        tags: ["IoT", "TimescaleDB", "វិភាគថាមពល", "ពេលវេលាពិត"],
        link: "មើល Dashboard ព្រះអាទិត្យ",
        kicker: "ផលិតផល · ០២",
        heading: "ការតាមដាន IoT ព្រះអាទិត្យ",
      },
    },
    how: {
      tag: "— របៀបដំណើរការ —",
      title: "ពីផ្ទាំងលេខដល់ច្រកក្នុងរយៈពេលតិចជាង ៤០០ms។",
      steps: [
        { n: "០១", t: "ថតរូប", body: "កាមេរ៉ា Edge ចាប់ផ្ទាំងលេខភ្លាមៗពេលយានយន្តមកដល់។" },
        { n: "០២", t: "ស្គាល់ + អាន", body: "YOLOv8 រកទីតាំងផ្ទាំងលេខ OCR អានតួអក្សរតាមម៉ូដែលកម្ពុជារបស់យើង។" },
        { n: "០៣", t: "ដំណើរការ + កត់ត្រា", body: "ផ្ទាំងអនុញ្ញាត → Relay បើកច្រក។ ព្រឹត្តិការណ៍ទាំងអស់កត់ត្រាទៅ Dashboard។" },
      ],
    },
    investor: {
      tag: "— សម្រាប់ប្រតិបត្តិករ និងវិនិយោគិន —",
      h: "លើសពីការចត — ហេដ្ឋារចនាសម្ព័ន្ធទិន្នន័យជាតិ។",
      body: "ស្ថានីយ៍ ALPR នីមួយៗគឺជាថ្នាំងទិន្នន័យ។ រួមគ្នាពួកវាបង្កើតជាស្រទាប់ឆ្លាតវៃពេលវេលាពិត សម្រាប់ប្រតិបត្តិករចត អ្នកគ្រប់គ្រងអចលនទ្រព្យ និងវិនិយោគិន — តាមដានការកាន់កាប់ ចំណូល និងចលនាយានយន្តទូទាំងប្រទេស។",
      cta: "និយាយអំពីការធ្វើដៃគូ",
      metrics: [
        { k: "ការកាន់កាប់", v: "ផ្ទាល់" },
        { k: "ចំណូល", v: "តាមស្ថានីយ៍" },
        { k: "យានយន្ត", v: "ទូទាំងប្រទេស" },
      ],
    },
    blog: {
      tag: "— ពីប្លុក —",
      title: "កំណត់ត្រាវិស្វកម្មពីភូមិភាគ។",
      meta: "ថ្ងៃទី ១៩ កុម្ភៈ ២០២៦  ·  ករណីសិក្សា",
      post: {
        title: "ការកសាងប្រព័ន្ធចតឡានឆ្លាតវៃផលិតកម្ម — ពីច្រកដល់ការទូទាត់",
        excerpt: "ការស៊ីជម្រៅទៅលើ stack ផលិតកម្មរបស់យើង៖ ពីការតភ្ជាប់ Relay និង Modbus RTU ដល់ Docker Swarm, YOLOv8 TensorRT inference និងការដាក់ឱ្យដំណើរការ Dashboard។",
        cta: "អានករណីសិក្សា",
      },
    },
    footer: {
      tagline: "ElectRobonics Matrix and Innovative Integration",
      products: "ផលិតផល",
      dashboards: "Dashboards",
      blog: "ប្លុក",
      contact: "ទំនាក់ទំនង",
      loc: "កម្ពុជា",
      rights: "© ២០២៦ eRoxii។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      builtIn: "កសាងនៅភ្នំពេញ",
    },
  },
} as const;

export type Translation = (typeof TRANSLATIONS)[Lang];
