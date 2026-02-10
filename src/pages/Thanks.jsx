import React, { forwardRef } from 'react';
import './Thanks.css';

const Thanks = forwardRef((props, ref) => {
  return (
    <div className="thanks-container" ref={ref}>
      {/* 배경을 가로지르는 비행 궤적 느낌 */}
      <div className="flight-path"></div>
      
      <div className="thanks-content">
        <h1 className="thanks-main-title">
          KODEHUN<span style={{ color: '#0043fa' }}>.</span>
        </h1>
        
        <p className="thanks-sub-text">
          저의 첫 여정의 시작, <br />
          프로젝트 비행을 봐주셔서 고맙습니다. <br /><br />
          <span style={{ fontSize: '1.2rem', color: '#111' }}>
            (여기뭐적지) 개발자, <br />
            <strong>허유나</strong>였습니다.
          </span>
        </p>

        {/* 표지와 똑같은 디자인의 연락처 박스 */}
        <div className="final-contact-wrapper">
          <div className="final-contact-text">
            <span style={{ color: '#53b2ff', fontSize: '1.2rem' }}>✉</span>
            CONTACT : eka8096@naver.com
          </div>
        </div>
      </div>
    </div>
  );
});

export default Thanks;