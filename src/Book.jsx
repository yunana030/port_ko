import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Info from './pages/Info';
import Usecase from './pages/Usecase';
import Youtube from './pages/Youtube';
import main from './assets/images/main.png';
import './Book.css';
import Erd from './pages/ERD';
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

  return (
    <div className="book-wrapper">
      <HTMLFlipBook
        width={500}
        height={700}
        size="fixed"
        showCover={true}
        flippingTime={1000}
        className="portfolio-book"
        ref={bookRef}
        drawShadow={false}
        showPageCorners={false}
        shadowColor="rgba(0, 0, 0, 0.03)"

      >

        {/* ===== 표지 ===== */}
        <div className="page" data-density="hard">
          <img src={main} alt="Cover" className="page-img" />
        </div>

        {/* ===== 펼침 1 ===== */}
        <div className="page">
          <Info />
        </div>
        <div className="page">
          <Youtube />
        </div>

        {/* ===== 펼침 2 ===== */}
        <div className="page">
          <Erd />
        </div>

        <div className="page">
          <Usecase />
        </div>

        {/* 3 */}
        <div className="page">
          <DFD />
        </div>
        <div className="page">
          <Troubleshooting />
        </div>
{/* 여기부터는 웹페이지 소개 */}
        {/* 4 */}
        <div className="page">
          <P1 />
        </div>
        <div className="page">
          <P2 />
        </div>

        {/* 5 */}
        <div className="page">
          <P3 />
        </div>
        <div className="page">
          <P4 />
        </div>

        {/* 6 */}
        <div className="page">
          <P5 />
        </div>
        <div className="page">
          <P6 />
        </div>
        {/* 6 */}
        <div className="page">
          <P7 />
        </div>
        <div className="page">
          <P8 />
        </div>
        {/* 7 */}
        <div className="page">
          <Learn />
        </div>
        <div className="page">
          <Thanks />
        </div>


        {/* 🔹🔹🔹 핵심 — 더미 페이지 (이거 없으면 계속 한 장) 🔹🔹🔹 */}
        <div className="page" data-density="hard">
          <BackCover />
        </div>

      </HTMLFlipBook>
    </div>
  );
};

export default Book;
