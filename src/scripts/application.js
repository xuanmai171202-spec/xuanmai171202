import '../css/style.css' // Part 2: Load CSS
import ScrollReveal from 'scrollreveal' // Part 6: Load thư viện hiệu ứng

// Cấu hình hiệu ứng hiện dần cho các class
const initScrollReveal = () => {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        reset: false
    });

    sr.reveal('.banner-text', { delay: 500, origin: 'bottom' });
    sr.reveal('.banner-cta', { delay: 800, origin: 'bottom' });
    sr.reveal('.section-title', { delay: 300, origin: 'top' });
    sr.reveal('.section-content', { delay: 500, origin: 'bottom', interval: 200 });
};

initScrollReveal();