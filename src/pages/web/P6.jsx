import React, { forwardRef } from 'react';
import './WebPages.css';
import myPageImg from '../../assets/images/myPage.png'; // 파일명 대소문자 주의!

const P6 = forwardRef((props, ref) => {
  return (
    <div className="web-page-container theme-mypage" ref={ref}>
      <div className="inner-padding">
        <header className="web-header">
          <div className="web-tag">06 · ARCHIVE</div>
          <h1 className="web-main-title">
            나의 여정, <span className="highlight-point">마이페이지</span>
          </h1>
        </header>

        <div className="content-title-box">
          <h2 className="content-sub-title">User Dashboard</h2>
        </div>


        <div className="web-screenshot-box flat">
          <img src={myPageImg} alt="My Page" className="web-img-fluid" />
        </div>

        <div className="web-description-card">
          <div className="caption-header">
            <span className="caption-label">PERSONAL DATA</span>
          </div>
          <p>개인 정보를 수정하고, 작성한 글 및 좋아요, 즐겨찾기한 게시글을 볼 수 있습니다</p>
        </div>
      </div>
    </div>
  );
});

export default P6;