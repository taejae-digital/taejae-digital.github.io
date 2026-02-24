import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="home-landing">
      <div className="home-container">
        <div className="home-badge">태재미래전략연구원 2026</div>
        <h1 className="home-title">
          AI 시대,<br />새로운 사회계약을<br />위한 기초 연구
        </h1>
        <p className="home-subtitle">
          기술 혁명의 황금기는 제도적 선택의 결과다.<br />
          질서 자체가 아니라, 질서가 작동할 조건을 설계한다.
        </p>
        <div className="home-links">
          <Link to="/book/" className="home-link-card">
            <div>
              <span className="home-link-title">시너지 북</span>
              <span className="home-link-desc">책 형태로 읽기</span>
            </div>
            <span className="home-link-arrow">&rarr;</span>
          </Link>
          <Link to="/202602_report/" className="home-link-card">
            <div>
              <span className="home-link-title">기초 연구 보고서</span>
              <span className="home-link-desc">보고서 전문 + 시각화 + 연구자 프로필</span>
            </div>
            <span className="home-link-arrow">&rarr;</span>
          </Link>
        </div>
        <div className="home-footer">태재디지털</div>
      </div>
    </div>
  )
}
