import React, { forwardRef } from 'react';
import './BackCover.css';

const BackCover = forwardRef((props, ref) => {
  return (
    <div className="back-cover-container" ref={ref}>
      {/* 중앙부: 팀 이름과 프로젝트 슬로건 */}
      <div className="back-team-content">
        <h1 className="back-team-logo">
          KODEHUN
        </h1>
        <p className="back-slogan">
          KOREA LOCAL SPOT SHARE PLATFORM
        </p>
      </div>

      {/* 하단부: 수미상관 문구 및 프로젝트 정보 */}
      <div className="back-project-info">
        <p style={{ fontSize: '1rem', color: '#fff', marginBottom: '15px' }}>
          "한국의 숨은 명소를 세계와 연결하다"
        </p>
        <p>TEAM KODEHUN PROJECT PORTFOLIO</p>
        <p>© 2024 KODEHUN. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
});

export default BackCover;