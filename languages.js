const entries = [
  ['title', 'SB GYM — Çağlayan, Istanbul', 'SB GYM — تشاغلايان، إسطنبول'],
  ['.skip', 'Skip to content', 'انتقل إلى المحتوى'],
  ['nav a:nth-child(1)', 'Studio', 'النادي'],
  ['nav a:nth-child(2)', 'Reviews', 'التقييمات'],
  ['nav a:nth-child(3)', 'Visit', 'الزيارة'],
  ['.header-call', 'Call the gym ↗', 'اتصل بالنادي ↗'],
  ['.hero .label', 'Çağlayan, Istanbul', 'تشاغلايان، إسطنبول'],
  ['#hero-title', 'Your neighborhood<br><em>fitness studio.</em>', 'استوديو اللياقة<br><em>في حيّك.</em>'],
  ['.lede', 'Daylit cardio, strength equipment and a reformer. Explore SB GYM in Çağlayan through photos.', 'منطقة كارديو مضاءة طبيعيًا، وأجهزة قوة وجهاز ريفورمر. اكتشف SB GYM في تشاغلايان بالصور.'],
  ['.hero .button', 'Plan your visit ↘', 'خطّط لزيارتك ↘'],
  ['.hero .text-link', 'First visit guide ↓', 'دليل الزيارة الأولى ↓'],
  ['.rating > span', '45 Google reviews', '٤٥ تقييمًا على Google'],
  ['figcaption a', 'Google Maps ↗', 'خرائط Google ↗'],
  ['#salon .label', 'Visit guide', 'دليل الزيارة'],
  ['#studio-title', 'Visiting for the first time?', 'هل هذه زيارتك الأولى؟'],
  ['#salon .text-link', 'Ask the gym ↗', 'اسأل النادي ↗'],
  ['details:nth-child(1) summary', 'I’m new to training. What should I ask?', 'أنا جديد في التدريب. ماذا أسأل؟'],
  ['details:nth-child(1) p', 'Share your goals and experience. Ask about coaching and one-to-one training options.', 'اشرح أهدافك وخبرتك، واسأل عن دعم المدربين وخيارات التدريب الفردي.'],
  ['details:nth-child(2) summary', 'Should I call ahead for reformer sessions?', 'هل أتصل مسبقًا لجلسات الريفورمر؟'],
  ['details:nth-child(2) p', 'A reformer is visible in the studio photos. Call the gym to check sessions, bookings and availability.', 'تظهر آلة الريفورمر في صور الاستوديو. اتصل بالنادي للاستفسار عن الجلسات والحجز والتوافر.'],
  ['details:nth-child(3) summary', 'How do I find out about membership and visits?', 'كيف أعرف تفاصيل العضوية والزيارة؟'],
  ['details:nth-child(3) p', 'Check prices and whether you need an appointment for your first visit by <a href="tel:+905304639470">calling the gym</a>.', 'استفسر عن الأسعار الحالية وما إذا كانت زيارتك الأولى تحتاج إلى موعد عبر <a href="tel:+905304639470">الاتصال بالنادي</a>.'],
  ['.reviews .label', 'Google Maps', 'خرائط Google'],
  ['#reviews-title', 'Through visitors’<br>eyes.', 'النادي بعيون<br>زوّاره.'],
  ['.review-intro .text-link', 'Read reviews on Google ↗', 'اقرأ التقييمات على Google ↗'],
  ['.review-note', 'What stands out in reviews', 'أبرز ما ورد في التقييمات'],
  ['dl div:nth-child(1) dt', 'Attentive coaches', 'مدربون يهتمون بك'],
  ['dl div:nth-child(1) dd', 'Visitors recall Sergen and Eda’s attention and encouragement.', 'يتذكر الزوّار اهتمام سيرغن وإيدا وتشجيعهما.'],
  ['dl div:nth-child(2) dt', 'Clean and tidy space', 'نظافة وترتيب'],
  ['dl div:nth-child(2) dd', 'Several reviews mention how clean and well kept the gym is.', 'تشير عدة تقييمات إلى نظافة النادي وحسن العناية به.'],
  ['dl div:nth-child(3) dt', 'A comfortable studio', 'استوديو مريح'],
  ['dl div:nth-child(3) dd', 'Visitors describe a friendly, calm setting where they can focus on training.', 'يصف الزوّار أجواء ودية وهادئة تساعدهم على التركيز في التمرين.'],
  ['.visit .label', 'Çağlayan · Kağıthane', 'تشاغلايان · كاغتهانة'],
  ['#visit-title', 'See you at the gym.', 'نلقاك في النادي.'],
  ['.visit > div > p:not(.label)', 'Call SB GYM to ask about your first visit, membership or training options.', 'اتصل بـ SB GYM للاستفسار عن زيارتك الأولى والعضوية وخيارات التدريب.'],
  ['.visit .button', 'Get directions ↗', 'احصل على الاتجاهات ↗'],
  ['.visit-card h3:first-child', 'Address', 'العنوان'],
  ['.visit-card h3:nth-of-type(2)', 'Opening hours', 'ساعات العمل'],
  ['.visit-card p', 'Daily · 08:00–23:00', 'يوميًا · <bdi>08:00–23:00</bdi>'],
  ['.visit-card .text-link', 'Check on Google Maps ↗', 'تحقّق على خرائط Google ↗'],
  ['.footer p', 'Website demo for SB GYM', 'موقع تجريبي لنادي SB GYM'],
];

const photos = {
  en: [
    ['Reformer', 'Reformer corner', 'Wooden reformer beside the window and mirror at SB GYM'],
    ['Cardio', 'Cardio by the window', 'Treadmill, exercise bike and elliptical by the window at SB GYM'],
    ['Strength', 'Strength training area', 'Cable station and adjustable weights bench at SB GYM'],
  ],
  ar: [
    ['ريفورمر', 'ركن الريفورمر', 'جهاز ريفورمر خشبي بجانب النافذة والمرآة في النادي'],
    ['كارديو', 'كارديو بجانب النافذة', 'أجهزة المشي والدراجة والإليبتيكال بجانب النافذة في النادي'],
    ['القوة', 'منطقة تمارين القوة', 'جهاز الكابلات ومقعد الأوزان القابل للتعديل في النادي'],
  ],
};

const picker = document.querySelector('#language');
const translated = entries.map(([selector, en, ar]) => {
  const element = document.querySelector(selector);
  return { element, content: { tr: element.innerHTML, en, ar } };
});
const photoTranslations = [...document.querySelectorAll('[data-photo]')].map((button, index) => ({
  button, label: button.lastChild,
  content: { tr: [button.lastChild.textContent, button.dataset.title, button.dataset.alt], en: photos.en[index], ar: photos.ar[index] },
}));

function switchLanguage(language) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  picker.value = language;
  picker.setAttribute('aria-label', { tr: 'Dil seç', en: 'Choose language', ar: 'اختر اللغة' }[language]);
  for (const {element, content} of translated) element.innerHTML = content[language];
  for (const {button, label, content} of photoTranslations) {
    const [name, title, alt] = content[language];
    label.textContent = name;
    button.dataset.title = title;
    button.dataset.alt = alt;
    if (button.getAttribute('aria-pressed') === 'true') {
      document.querySelector('#photo-title').textContent = title;
      document.querySelector('#studio-photo').alt = alt;
    }
  }
}

picker.hidden = false;
const url = new URL(location.href);
const requested = url.searchParams.get('lang');
switchLanguage(['en', 'ar'].includes(requested) ? requested : 'tr');
picker.addEventListener('change', () => {
  switchLanguage(picker.value);
  const current = new URL(location.href);
  if (picker.value === 'tr') current.searchParams.delete('lang');
  else current.searchParams.set('lang', picker.value);
  history.replaceState(null, '', current);
});
