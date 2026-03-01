import { useState } from 'react';
import type { RemediationAction } from '../types';
const priorityColor: Record<string, string> = { critical: '#ff2222', high: '#ff6600', medium: '#ffaa00', low: '#88ff44' };
export default function RemediationTracker({ actions }: { actions: RemediationAction[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="remediation-list">
      {actions.map((a) => (
        <div key={a.id} className={emediation-item  } onClick={() => setExpanded(expanded === a.id ? null : a.id)}>
          <div className="rem-main">
            <div className="rem-priority" style={{ background: priorityColor[a.priority] }} />
            <div className="rem-content">
              <div className="rem-top">
                <span className="rem-title">{a.title}</span>
                <div className="rem-badges">
                  <span className="rem-category">{a.category}</span>
                  <span className={em-status }>{a.status === 'open' ? 'OPEN' : a.status === 'in-progress' ? 'IN PROGRESS' : 'âœ“ RESOLVED'}</span>
                </div>
              </div>
              <div className="rem-meta"><span>ðŸ‘¤ {a.assignee}</span><span>ðŸ“… Due {a.dueDate}</span></div>
            </div>
            <span className="rem-expand">{expanded === a.id ? 'â–²' : 'â–¼'}</span>
          </div>
          {expanded === a.id && (
            <div className="rem-details">
              <p>{a.description}</p>
              <div className="rem-actions">
                <button className="rem-btn primary">Mark In Progress</button>
                <button className="rem-btn">Assign</button>
                <button className="rem-btn">View Details</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
