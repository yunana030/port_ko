import React, { forwardRef } from 'react';
import './Troubleshooting.css';

const Troubleshooting = forwardRef((props, ref) => {
  return (
    <div className="ts-container" ref={ref}>
      <div className="inner-padding">
        <header className="info-header">
          <p className="sub-question">어떤 문제를 해결했을까요?</p>
          <h1 className="main-title">TROUBLE <span className="highlight-orange">SHOOTING</span></h1>
        </header>

        {/* 메인 트러블슈팅 카드 */}
        <section className="ts-section">
          <div className="ts-card accent-orange">
            <div className="card-header">
              <span className="ts-tag">SITUATION</span>
              <h3>복합 검색 기능 구현</h3>
            </div>
            <p className="ts-desc-main">
              카테고리 버튼과 검색어 필터를 동시에 적용하는 로직 구현 중 문제 발생
            </p>
          </div>

          <div className="ts-card accent-red">
            <div className="card-header">
              <span className="ts-tag error">ISSUE</span>
              <h3>Enum 타입 변환 오류</h3>
            </div>
            <p className="ts-desc">
              검색어를 Enum(PlaceCategory) 상수로만 매칭하려다 보니, 일반 검색어 입력 시 <strong>Type Mismatch 에러</strong> 발생
            </p>
          </div>

          <div className="ts-card accent-green">
            <div className="card-header">
              <span className="ts-tag success">SOLUTION</span>
              <h3>안전한 변환 로직 설계</h3>
            </div>
            <div className="code-block">
              <pre>
{`public static PlaceCategory from(String input) {
    for (PlaceCategory c : values()) {
        if (c.name().equalsIgnoreCase(input)) return c;
    }
    return null; // 에러 대신 null 반환
}`}
              </pre>
            </div>
            <p className="ts-desc">
              Enum 내부에 변환 메소드를 추가하여 매칭 실패 시 에러 대신 null을 반환, DB 검색 단계로 유연하게 넘겨줌
            </p>
          </div>

          <div className="result-badge">
            <span className="emoji">🏆</span>
            <p>검색 정상화 및 타입 유연성 확보 완료!</p>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Troubleshooting;