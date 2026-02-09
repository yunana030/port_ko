import React, { forwardRef } from 'react';
import './WebPages.css';
import freeImg from '../../assets/images/free.png';

const P7 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-review" ref={ref}>
      <div className="inner-padding">
        <header className="web-header">
          <div className="web-tag">07 · COMMUNITY</div>
          <h1 className="web-main-title">
            함께 나누는, <span className="highlight-point">리뷰 & 게시판</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">Communication</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: 1 }}>
          <div className="web-screenshot-box flat">
            <img src={freeImg} alt="Free Board" className="web-img-fluid" style={{ maxHeight: '180px' }} />
          </div>
          <div className="web-screenshot-box flat">
            <img src={freeImg} alt="Review" className="web-img-fluid" style={{ maxHeight: '180px' }} />
          </div>
        </div>

        <div className="web-description-card">
          <div className="caption-header">
            <span className="caption-label">INTERACTION</span>
          </div>
          <p>자유로운 의견 교환과 생생한 리뷰를 통해 풍부한 네트워크를 형성합니다.</p>
        </div>
      </div>
    </div>
  );
});

export default P7;