import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Info from './pages/Info';
import Usecase from './pages/Usecase';
import Youtube from './pages/Youtube';
import main from './assets/images/main.png';
import './Book.css';
import Erd from './pages/Erd';
import DFD from './pages/DFD';
import Troubleshooting from './pages/Troubleshooting';
import P1 from './pages/web/P1';
import P2 from './pages/web/P2';
import P3 from './pages/web/P3';
import P4 from './pages/web/P4';
import P5 from './pages/web/P5';
import P6 from './pages/web/P6';
import P7 from './pages/web/P7';
import P8 from './pages/web/P8';
import Thanks from './pages/Thanks';
import Learn from './pages/Learn';
import BackCover from './pages/BackCover';

const Book = () => {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  // 🚀 이 props 변수가 정의되어 있어야 에러가 안 나!
  const bookProps = {
    width: 500,
    height: 700,
    size: "fixed",
    showCover: true,
    flippingTime: 1000,
    drawShadow: false,
    showPageCorners: false,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    mobileScrollSupport: true,
    className: "portfolio-book",
  };

  return (
    <div className="book-wrapper">
      <div className="system-guide-bar">
        <span className="material-symbols-outlined">info</span>
        <p>브라우저 창을 키우거나 전체 화면으로 보시면 더욱 쾌적하게 감상하실 수 있습니다.</p>
      </div>
      
      {/* 1. 배경 레이어: currentPage가 17일 때만 visible 클래스가 붙어 */}
      <div className={`final-arrival-layer ${currentPage >= 17 ? 'visible' : 'hidden'}`}>
        <a href="https://yunana030.github.io/nanaful_day/" className="nav-group">
          <span className="top-label">다음 여정을 시작하는 책장을 넘겨주세요</span>
          <span className="nav-bottom-text">Back to Portfolio</span>
          <div className="nav-line"></div>
        </a>
      </div>

      {/* 2. 플립북 본체 */}
      <HTMLFlipBook 
        ref={bookRef}
        onFlip={(e) => {
          // 직접 현재 페이지 인덱스를 물어봐서 업데이트
          const realIndex = bookRef.current.pageFlip().getCurrentPageIndex();
          setCurrentPage(realIndex);
          console.log("현재 페이지:", realIndex);
        }}
        {...bookProps}
      >
      
        {/* ===== 표지 (0) ===== */}
        <div className="page" data-density="hard">
          <img src={main} alt="Cover" className="page-img" />
        </div>

        {/* ===== 펼침 1 (1, 2) ===== */}
        <div className="page"><Info /></div>
        <div className="page"><Youtube /></div>

        {/* ===== 펼침 2 (3, 4) ===== */}
        <div className="page"><Erd /></div>
        <div className="page"><Usecase /></div>

        {/* 3 (5, 6) */}
        <div className="page"><DFD /></div>
        <div className="page"><Troubleshooting /></div>

        {/* 4 (7, 8) */}
        <div className="page"><P1 /></div>
        <div className="page"><P2 /></div>

        {/* 5 (9, 10) */}
        <div className="page"><P3 /></div>
        <div className="page"><P4 /></div>

        {/* 6 (11, 12) */}
        <div className="page"><P5 /></div>
        <div className="page"><P6 /></div>

        {/* 7 (13, 14) */}
        <div className="page"><P7 /></div>
        <div className="page"><P8 /></div>

        {/* 8 (15, 16) */}
        <div className="page"><Learn /></div>
        <div className="page"><Thanks /></div>

        {/* 마지막 뒷표지 (17) */}
        <div className="page" data-density="hard">
          <BackCover />
        </div>
      </HTMLFlipBook>

    </div>
  );
};

export default Book;