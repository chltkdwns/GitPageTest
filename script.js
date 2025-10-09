// === 배경 전환 ===
const background = document.querySelector('.background-layer');
const sections = document.querySelectorAll('.snap-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bg = entry.target.getAttribute('data-bg');
      if (bg) background.style.backgroundImage = `url("${bg}")`;

      const id = entry.target.id;
      document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));

// === 기술 스택 설명 데이터 ===
const skillData = {
  springboot: {
    title: "Spring Boot (Java)",
    desc: "REST API 서버 구현 및 JWT 인증 적용. JPA/Hibernate로 DB 연동 및 CRUD 처리 가능. Jenkins를 통한 CI/CD 자동화 경험 보유."
  },
  mysql: {
    title: "MySQL",
    desc: "스키마 설계와 연관관계 매핑 경험. 페이징, 정렬, 조인 등 데이터 처리 구현 가능."
  },
  nodejs: {
    title: "Node.js",
    desc: "Express 기반 REST API 서버 제작, 미들웨어 구성 및 CORS 처리, 에러 핸들링 경험."
  },
  jenkins: {
    title: "Jenkins",
    desc: "GitHub 연동 CI/CD 파이프라인 구성. 빌드-테스트-배포 자동화 환경 구축."
  },
  react: {
    title: "React",
    desc: "Hooks 기반 상태 관리, Axios를 이용한 API 연동, 에러/로딩 처리 및 SPA 라우팅 구현 경험."
  },
  nextjs: {
    title: "Next.js",
    desc: "SSR/CSR 혼합 구조를 활용한 SEO 친화적 웹 구축. 프로젝트 배포 환경 구성 경험."
  },
  javascript: {
    title: "JavaScript (ES6+)",
    desc: "비동기 처리(Promise, async/await), 모듈 시스템 활용, 프론트/백엔드 전반에 사용."
  },
  github: {
    title: "Git / GitHub",
    desc: "브랜치 전략, Pull Request 기반 협업 경험. 충돌 해결 및 버전 관리 실무 경험."
  },
  intellij: {
    title: "IntelliJ IDEA",
    desc: "Spring Boot 백엔드 개발에 활용. 디버깅, 코드 자동완성, 빌드 환경 세팅 경험."
  },
  vsc: {
    title: "VSCode",
    desc: "React, Node.js 환경에서의 프론트엔드 개발에 활용. 확장 기능 및 디버깅 도구 적극 활용."
  }
};

// === 드롭다운 이벤트 ===
const skillItems = document.querySelectorAll(".skill-item");
const skillInfo = document.getElementById("skill-info");
const skillTitle = document.getElementById("skill-title");
const skillDesc = document.getElementById("skill-desc");

skillItems.forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.skill;
    const data = skillData[key];

    // 같은 기술 클릭 시 닫기
    if (skillInfo.classList.contains("active") && skillTitle.textContent === data.title) {
      skillInfo.classList.remove("active");
      return;
    }

    // 새 기술 정보 표시
    skillTitle.textContent = data.title;
    skillDesc.textContent = data.desc;
    skillInfo.classList.add("active");
  });
});

// === 부드러운 스크롤 이동 ===
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
