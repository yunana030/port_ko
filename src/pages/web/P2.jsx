import React, { forwardRef } from 'react';
import './WebPages.css';
import placeImg from '../../assets/images/place.png';

const P2 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-green" ref={ref}>
      <div className="inner-padding">
        <header className="web-header">
          {/* 다른 페이지에서 지우고 싶다면 이 div만 삭제하세요 */}
          <div className="web-tag">02 · DISCOVERY</div>
          <h1 className="web-main-title">
            어디로 갈까요, <span className="highlight-point">명소 탐색</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">Place 게시판</h2>
        </div>

        <div className="web-screenshot-box flat">
          <img src={placeImg} alt="Place List" className="web-img-fluid" />
        </div>

        <div className="web-description-card">
          <span className="caption-label">CORE FEATURE</span>
          <p>필터링으로 원하는 정보를 빠르게 발견하세요. 사용자들이 남긴 명소를 한눈에 볼 수있 습니다!</p>
        </div>
      </div>
    </div>
  );
});

export default P2;