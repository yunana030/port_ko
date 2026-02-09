import React, { forwardRef } from 'react';
import './WebPages.css';
import adminImg from '../../assets/images/admin.png';

const P8 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-admin" ref={ref}>
      <div className="inner-padding">
        <header className="web-header">
          <div className="web-tag">08 · MANAGEMENT</div>
          <h1 className="web-main-title">
            체계적인 관리, <span className="highlight-point">어드민 패널</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">Admin Dashboard</h2>
        </div>

        <div className="web-screenshot-box flat">
          <img src={adminImg} alt="Admin Panel" className="web-img-fluid" />
        </div>

        <div className="web-description-card">
          <div className="caption-header">
            <span className="caption-label">CONTROL</span>
          </div>
          <p>전체 게시글 관리와 유저 모니터링을 통해 서비스의 안정적인 운영을 책임집니다.</p>
        </div>
      </div>
    </div>
  );
});

export default P8;