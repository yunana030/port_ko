import React, { forwardRef } from 'react';
import './WebPages.css';
import dfdImg from '../../assets/images/dfd.png';

const P5 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-detail" ref={ref}>
      <div className="inner-padding">
        <header className="web-header">
          <div className="web-tag">05 · EXPLORATION</div>
          <h1 className="web-main-title">
            상세한 정보, <span className="highlight-point">콘텐츠 탐색</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">Detail View</h2>
        </div>

        {/* 비행기 이미지 태그 삭제 완료 */}
        <div className="web-screenshot-box flat">
          <img src={dfdImg} alt="Detail" className="web-img-fluid" />
        </div>

        <div className="web-description-card">
          <div className="caption-header">
            <span className="caption-label">INFORMATION</span>
          </div>
          <p>마음에 드는 장소의 주소 및 다양한 정보를 볼 수 있습니다. 마음에 드시는 장소에는 즐겨찾기와 좋아요 좋댓구알...</p>
        </div>
      </div>
    </div>
  );
});

export default P5;