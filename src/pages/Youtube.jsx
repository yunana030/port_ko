import React, { forwardRef } from 'react';
import './Youtube.css';

// https://www.youtube.com/watch?si=XmcVzi7P11Q8eO10&v=vfQGMKwUghw&feature=youtu.be
const Youtube = forwardRef((props, ref) => {
  const videoId = "vfQGMKwUghw"; // 실제 ID로 교체
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="youtube-container" ref={ref}>
      {/* 배경 장식 (Info와 통일감 유지) */}
      <div className="deco-circle circle-top-right"></div>
      
      <div className="inner-padding">
        {/* Info 페이지와 동일한 헤더 정렬 */}
        <header className="info-header">
          <p className="sub-question">어떻게 작동하는지 궁금하신가요?</p>
          <h1 className="main-title">PROJECT <span className="highlight">VIDEO</span></h1>
        </header>

        {/* 비디오 카드 섹션 */}
        <div className="video-section">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="video-card">
            <div className="thumbnail-wrapper">
              <img src={thumbUrl} alt="Youtube Thumbnail" className="thumb-img" />
              <div className="play-button-overlay">
                <div className="play-icon"></div>
              </div>
            </div>
            <div className="video-info">
              <span className="platform-tag">YouTube</span>
              <p className="video-desc">이미지를 클릭하면 시연 영상으로 이동합니다.</p>
            </div>
          </a>
        </div>

        {/* 하단 설명 카드 (Info의 역할 카드 스타일 참고) */}
        <div className="guide-card">
          <div className="guide-content">
            <span className="icon-emoji">💡</span>
            <p>전체적인 서비스 흐름과 주요 기능을<br/>영상을 통해 자세히 확인하실 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Youtube;