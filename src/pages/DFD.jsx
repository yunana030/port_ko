import React, { forwardRef } from 'react';
import './DFD.css';
import dfdImage from '../assets/images/dfd.png'; 
import dfdplace from '../assets/images/dfd_place.png'; 

const DFD = forwardRef((props, ref) => {
  return (
    <div className="dfd-container" ref={ref}>
      {/* 배경 장식 */}
      <div className="deco-circle circle-green"></div>
      
      <div className="inner-padding">
        <header className="info-header">
          <p className="sub-question">데이터는 어떻게 흐를까요?</p>
          <h1 className="main-title">DATA <span className="highlight-green">FLOW</span></h1>
        </header>
        <div className="dfd-caption-flat">
            <span className="dot-green"></span>
            <p>사용자 요청부터 DB 저장까지의 데이터 흐름도</p>
          </div>

        {/* 이미지 영역: 테두리나 배경 없이 이미지만 깔끔하게 노출 */}
        <div className="dfd-content-area">
          <div className="dfd-main-img-container">
            <img src={dfdImage} alt="DFD Diagram" className="dfd-clean-img" />
          </div>
          
          {/* 추가된 조그만 그림 (dfdplace) 배치 */}
          {dfdplace && (
            <div className="dfd-sub-img-container">
              <img src={dfdplace} alt="Sub Diagram" className="dfd-clean-img" />
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
});

export default DFD;