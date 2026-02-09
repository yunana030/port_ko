import React, { forwardRef } from 'react';
import './Learn.css';

const Learn = forwardRef((props, ref) => {
  return (
    <div className="learn-container" ref={ref}>
      {/* 우측 상단 원형 장식 */}
      <div className="circle-decoration"></div>

      <div className="inner-padding">
        <header className="web-header">
          <div className="web-tag" style={{ color: '#F59E0B' }}>09 · RETROSPECTIVE</div>
          <h1 className="web-main-title">
            여정을 마치며, <span className="highlight-point" style={{ color: '#F59E0B' }}>성장 기록</span>
          </h1>
        </header>

        <div className="info-content-area" style={{ marginTop: '40px' }}>
          {/* 배운 점 섹션 */}
          <div className="reflection-card">
            <div className="reflection-title">🌱 Learned & Growth</div>
            <p className="reflection-desc">
             가다나다라ㅏㄹ미나;ㅣ121346943121544651
             가다나다라ㅏㄹ미나;ㅣ121346943121544651
             가다나다라ㅏㄹ미나;ㅣ121346943121544651ㅏㅏㅏㅏㅏㅏ
            </p>
          </div>

          {/* 아쉬운 점 섹션 */}
          <div className="reflection-card" style={{ borderLeftColor: '#F59E0B' }}>
            <div className="reflection-title">🔍 Reflection & Future</div>
            <p className="reflection-desc">
              가다나다라ㅏㄹ미나;ㅣ121346943121544651135465
              가다나다라ㅏㄹ미나;ㅣ121346943121544651
              가다나다라ㅏㄹ미나;ㅣ121346943121544651ㅏㅏㅏㅏㅏㅏ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Learn;