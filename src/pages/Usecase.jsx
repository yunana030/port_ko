import React, { forwardRef } from 'react';
import './Usecase.css';

const Usecase = forwardRef((props, ref) => {
  return (
    <div className="usecase-container" ref={ref}>
      <div className="deco-circle usecase-circle"></div>
      
      <div className="inner-padding">
        <header className="info-header">
          <p className="sub-question">권한에 따른 서비스 이용 범위를 확인하세요.</p>
          <h1 className="main-title">USER <span className="highlight">AUTHORITY</span></h1>
        </header>

        <div className="usecase-content-section">
          {/* 1. 비회원 (Guest) */}
          <div className="actor-group guest">
            <div className="actor-badge guest">Guest</div>
            <ul className="action-list">
              <li>
                <span className="dot"></span>
                <p><strong>접근 제한:</strong> PLACE 리스트 페이지만 조회 가능</p>
              </li>
              <li>
                <span className="dot"></span>
                <p><strong>이용 불가:</strong> 모든 게시판 글 등록 권한 없음</p>
              </li>
            </ul>
          </div>

          <div className="actor-group user">
            <div className="actor-badge user">Member</div>
            <ul className="action-list">
              <li>
                <span className="dot"></span>
                <p><strong>커뮤니티:</strong> 모든 게시판 글/댓글 등록·수정·삭제 가능</p>
              </li>
              <li>
                <span className="dot"></span>
                <p><strong>PLACE 게시판:</strong> 좋아요 및 즐겨찾기 가능</p>
              </li>
              <li>
                <span className="dot"></span>
                <p><strong>마이페이지:</strong> 프로필 관리 및 <strong>즐겨찾기 목록</strong> 조회 가능</p>
              </li>
            </ul>
          </div>

          {/* 3. 관리자 (Admin) */}
          <div className="actor-group admin">
            <div className="actor-badge admin">Admin</div>
            <ul className="action-list">
              <li>
                <span className="dot"></span>
                <p><strong>회원 관리:</strong> 유저 관리 및 <strong>등급 조정 가능</strong></p>
              </li>
              <li>
                <span className="dot"></span>
                <p><strong>운영 관리:</strong> 공지사항 등록 및 모든 게시글 조회·삭제 가능</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="usecase-guide-card">
          <div className="guide-content">
            <span className="icon-emoji">🔐</span>
            <p>
              사용자 등급별로 <strong>접근 권한</strong>을 두어<br/>
              체계적인 서비스 운영 프로세스를 구축했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Usecase;