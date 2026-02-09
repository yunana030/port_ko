import React, { forwardRef } from 'react';
import './Info.css';

const Info = forwardRef((props, ref) => {
  return (
    <div className="info-container" ref={ref}>
      {/* 배경 장식용 원형 요소들 */}
      <div className="deco-circle circle-1"></div>
      <div className="deco-circle circle-2"></div>

      <div className="inner-padding">
        {/* 상단 헤더 영역 */}
        <header className="info-header">
          <p className="sub-question">어떤 기술로 프로젝트를 완성했을까요?</p>
          <h1 className="main-title">USED <span className="highlight">TECH</span></h1>
        </header>

        {/* 기술 스택 - 팜플릿의 아이콘 리스트 스타일 */}
        <div className="tech-section">
          <div className="tech-grid">
            {['SpringBoot', 'Java', 'JavaScript', 'JPA', 'MySQL', 'MVC'].map((tech) => (
              <div key={tech} className="tech-item">
                <div className="tech-icon-dot"></div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 역할 섹션 - 둥근 카드 스타일 */}
        <section className="role-section">
          {/* 노란색 강조가 카드 내부로 들어가므로 여기는 제목만 깔끔하게 유지 */}
          <div className="section-divider">
            <span>MY ROLE</span>
          </div>
          
          <div className="role-card-wrapper">
            {/* 첫 번째 카드: 백엔드 */}
            <div className="role-card accent-yellow"> 
              <div className="card-header">
                <span className="icon-emoji">⚙️</span>
                <h3>Backend & Integration</h3>
              </div>
              <ul className="role-bullet-list">
                <li>게시판 CRUD 및 이미지 핸들링</li>
                <li>카테고리 검색 & 페이지네이션</li>
                <li>회원 검증 및 즐겨찾기 로직</li>
              </ul>
            </div>

            {/* 두 번째 카드: 디자인 */}
            <div className="role-card accent-blue"> 
              <div className="card-header">
                <span className="icon-emoji">🎨</span>
                <h3>UI/UX Design</h3>
              </div>
              <ul className="role-bullet-list">
                <li>담당 기능 UI 설계 및 구현</li>
                <li>Thymeleaf 기반 페이지 구조화</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Info;