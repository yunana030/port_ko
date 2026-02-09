import React, { forwardRef } from 'react';
import './WebPages.css';
import signImg from '../../assets/images/sign.png';
import planeImg from '../../assets/images/plane.png'; // 비행기 이미지 임포트

const P4 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-sign" ref={ref} style={{ position: 'relative' }}>
      <div className="inner-padding">
        {/* --- 비행기 위치를 여기서 직접 수정하세요! --- */}
        <img 
          src={planeImg} 
          alt="plane" 
          style={{
            position: 'absolute',
            bottom: '90px',   // 위아래 위치
            left: '30px',    // 좌우 위치
            width: '200px',   // 크기
            opacity: 0.5,     // 투명도 (낮을수록 은은함)
            transform: 'rotate(-15deg)', // 각도
            zIndex: 0,        // 컨텐츠 뒤로
            pointerEvents: 'none'
          }} 
        />
        {/* -------------------------------------- */}

        <header className="web-header">
          <div className="web-tag">04 · SIGN IN/UP</div>
          <h1 className="web-main-title">
            여정의 시작, <span className="highlight-point">로그인 & 가입</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">Auth Systems</h2>
        </div>

        <div className="web-screenshot-box flat" style={{ zIndex: 1 }}>
          <img src={signImg} alt="Sign In" className="web-img-fluid" />
        </div>

        <div className="web-description-card" style={{ zIndex: 1 }}>
          <div className="caption-header">
            <span className="data-chip">JWT AUTH</span>
          </div>
          <p>안전한 보안 인증 시스템을 통해 개인정보를 보호하며 간편한 접근을 제공합니다.</p>
        </div>
      </div>
    </div>
  );
});

export default P4;