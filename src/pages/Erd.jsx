import React, { forwardRef } from 'react';
import './Erd.css';
import erdImg from '../assets/images/erd_kodehun.png';

const Erd = forwardRef((props, ref) => {
  // 이미지를 새 탭에서 크게 여는 함수
  const openOriginalImage = () => {
    window.open(erdImg, '_blank');
  };

  return (
    <div className="erd-container" ref={ref}>
      {/* 배경 장식 (Info와 통일감) */}
      <div className="deco-circle erd-circle"></div>
      
      <div className="inner-padding">
        {/* 공통 헤더 스타일 적용 */}
        <header className="info-header">
          <p className="sub-question">데이터 구조를 한눈에 확인해보세요.</p>
          <h1 className="main-title">DATABASE <span className="highlight">ERD</span></h1>
        </header>

        {/* 이미지 컨테이너 */}
        <div className="erd-img-section">
          <div className="erd-img-card" onClick={openOriginalImage} title="클릭하면 크게 보기">
            <img src={erdImg} alt="Database ERD" className="erd-fit-img" />
            <div className="zoom-overlay">
              <span>Click to Zoom In 🔍</span>
            </div>
          </div>
        </div>

        {/* 2. ⭐ 유나의 역할 칸 (새로 추가!) ⭐ */}
        <div className="my-contribution-section">
          <div className="section-divider">
            <span>색칠된 부분이 제가 담당한 파트입니다!</span>
          </div>
        </div>

        {/* 하단 설명 영역 (가이드 카드 스타일) */}
        <div className="erd-guide-card">
          <div className="guide-content">
            <span className="icon-emoji">💡</span>
            <p>
              원본 이미지가 매우 크므로 <strong>이미지를 클릭</strong>하시면<br/>
              새 창에서 더 선명하고 자세하게 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Erd;