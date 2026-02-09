import React, { forwardRef } from 'react';
import './WebPages.css';
import mainImg from '../../assets/images/home.png';

const P1 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-sky" ref={ref}>
      <div className="inner-padding">
        <header className="web-header">
          <div className="web-tag">페이지 소개</div>
          <h1 className="web-main-title">
            서비스의 시작,<br/>
            <span className="highlight-point">홈 페이지</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">Main Dashboard</h2>
        </div>

        {/* flex: 1 설정으로 이미지가 영역을 최대한 차지합니다 */}
        <div className="web-screenshot-box flat">
          <img src={mainImg} alt="Main" className="web-img-fluid" />
        </div>

        <div className="web-description-card">
          <span className="caption-label">MAIN HOME</span>
          <p>사용자가 마주하는 첫 얼굴입니다. 최신 콘텐츠를 메인에서 즉각 확인하세요.</p>
        </div>
      </div>
    </div>
  );
});

export default P1;