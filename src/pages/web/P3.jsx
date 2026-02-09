import React, { forwardRef } from 'react';
import './WebPages.css';
import writeImg from '../../assets/images/wirte.png';

const P3 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-write fancy" ref={ref}>
      <div className="inner-padding">
        <header className="web-header" style={{ textAlign: 'center' }}>
          <div className="web-tag">03 · CONTRIBUTION</div>
          <h1 className="web-main-title">
            추억의 기록, <span className="highlight-point">포스트 작성</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">Editor Interface</h2>
        </div>

        <div className="web-screenshot-box flat">
          <img src={writeImg} alt="Write" className="web-img-fluid" />
        </div>

        <div className="web-description-card">
          <div className="caption-header">
            <span className="caption-label">USER EXPERIENCE</span>

          </div>
          <p>직관적인 에디터를 통해 나만의 여행 기록을 손쉽게 남기고 공유할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
});

export default P3;