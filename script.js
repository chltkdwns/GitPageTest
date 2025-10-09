// === 배경 이미지 자동 전환 ===
const background = document.querySelector('.background-layer');
const sections = document.querySelectorAll('.snap-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bg = entry.target.getAttribute('data-bg');
      if (bg) background.style.backgroundImage = `url("${bg}")`;

      // nav active 표시
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));
