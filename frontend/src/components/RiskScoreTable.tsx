import type { RiskScore } from '../types';
const gradeColor: Record<string, string> = { A: '#00ff9d', B: '#88ff44', C: '#ffaa00', D: '#ff6600', F: '#ff2222' };
export default function RiskScoreTable({ scores }: { scores: RiskScore[] }) {
  return (
    <div className="risk-table">
      {scores.map((s) => (
        <div key={s.id} className="risk-row">
          <div className="risk-grade" style={{ color: gradeColor[s.grade], borderColor: gradeColor[s.grade] + '44' }}>{s.grade}</div>
          <div className="risk-info">
            <span className="risk-domain">{s.domain}</span>
            <span className="risk-category">{s.category}</span>
          </div>
          <div className="risk-score-bar">
            <div className="risk-bar-track"><div className="risk-bar-fill" style={{ width: ${s.score}%, background: gradeColor[s.grade] }} /></div>
            <span className="risk-num">{s.score}</span>
          </div>
          <div className={isk-trend }>{s.trend === 'up' ? 'â†‘' : s.trend === 'down' ? 'â†“' : 'â†’'}</div>
        </div>
      ))}
    </div>
  );
}
