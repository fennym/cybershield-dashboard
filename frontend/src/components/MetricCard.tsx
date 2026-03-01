import type { ThreatMetric } from '../types';
interface MetricCardProps { metric: ThreatMetric; index: number; }
export default function MetricCard({ metric, index }: MetricCardProps) {
  const isPositive = metric.change > 0;
  const changeGood = metric.label === 'Fraud Prevented' ? isPositive : !isPositive;
  return (
    <div className="metric-card" style={{ animationDelay: ${index * 0.1}s }}>
      <div className="metric-glow" style={{ background: metric.color }} />
      <div className="metric-top">
        <span className="metric-label">{metric.label}</span>
        <span className={metric-change }>{isPositive ? 'â†‘' : 'â†“'} {Math.abs(metric.change)}%</span>
      </div>
      <div className="metric-value">
        <span className="metric-number" style={{ color: metric.color }}>{metric.label === 'Fraud Prevented' ? '$' : ''}{metric.value.toLocaleString()}</span>
        <span className="metric-unit">{metric.unit}</span>
      </div>
      <div className="metric-bar"><div className="metric-bar-fill" style={{ width: ${Math.min(metric.value, 100)}%, background: metric.color }} /></div>
    </div>
  );
}
