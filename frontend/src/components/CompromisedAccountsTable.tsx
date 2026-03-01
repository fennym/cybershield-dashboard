import { useState } from 'react';
import type { CompromisedAccount } from '../types';
const severityColor: Record<string, string> = { critical: '#ff2222', high: '#ff6600', medium: '#ffaa00', low: '#88ff44' };
export default function CompromisedAccountsTable({ accounts }: { accounts: CompromisedAccount[] }) {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? accounts : filter === 'active' ? accounts.filter(a => !a.remediated) : accounts.filter(a => a.remediated);
  return (
    <div className="accounts-table">
      <div className="table-filters">
        {['all', 'active', 'remediated'].map(f => (
          <button key={f} className={ilter-btn } onClick={() => setFilter(f)}>{f.toUpperCase()}</button>
        ))}
      </div>
      <div className="table-wrapper">
        <table>
          <thead><tr><th>EMAIL</th><th>BREACH SOURCE</th><th>DATE</th><th>SEVERITY</th><th>DATA TYPES</th><th>STATUS</th></tr></thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className={a.remediated ? 'remediated' : ''}>
                <td className="mono">{a.email}</td>
                <td>{a.breachSource}</td>
                <td className="mono">{a.breachDate}</td>
                <td><span className="severity-badge" style={{ color: severityColor[a.severity], borderColor: severityColor[a.severity] + '44' }}>{a.severity.toUpperCase()}</span></td>
                <td><div className="data-types">{a.dataTypes.map(d => <span key={d} className="data-tag">{d}</span>)}</div></td>
                <td><span className={status-badge }>{a.remediated ? 'âœ“ REMEDIATED' : 'âš  ACTIVE'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
