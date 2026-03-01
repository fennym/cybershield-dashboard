import type { RiskScore, CompromisedAccount, RemediationAction, ThreatMetric, ChartDataPoint } from '../types';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const api = {
  async getRiskScores(): Promise<RiskScore[]> {
    await delay(600);
    return [
      { id: '1', domain: 'api.payments.internal', score: 34, grade: 'F', trend: 'down', lastUpdated: '2 min ago', category: 'API Security' },
      { id: '2', domain: 'auth.mastercard.internal', score: 72, grade: 'C', trend: 'up', lastUpdated: '5 min ago', category: 'Authentication' },
      { id: '3', domain: 'web.portal.external', score: 88, grade: 'B', trend: 'stable', lastUpdated: '12 min ago', category: 'Web Application' },
      { id: '4', domain: 'db.transaction.core', score: 91, grade: 'A', trend: 'up', lastUpdated: '1 hr ago', category: 'Database' },
      { id: '5', domain: 'cdn.assets.global', score: 56, grade: 'D', trend: 'down', lastUpdated: '3 min ago', category: 'Infrastructure' },
    ];
  },

  async getCompromisedAccounts(): Promise<CompromisedAccount[]> {
    await delay(700);
    return [
      { id: '1', email: 'j.smith@corp.io', breachSource: 'LinkedIn 2024', breachDate: '2024-11-12', severity: 'critical', dataTypes: ['password', 'email', 'phone'], remediated: false },
      { id: '2', email: 'a.jones@corp.io', breachSource: 'Adobe Systems', breachDate: '2024-09-03', severity: 'high', dataTypes: ['email', 'encrypted_password'], remediated: false },
      { id: '3', email: 'r.patel@corp.io', breachSource: 'Dropbox', breachDate: '2024-08-17', severity: 'medium', dataTypes: ['email'], remediated: true },
      { id: '4', email: 'l.chen@corp.io', breachSource: 'Twitter/X 2024', breachDate: '2024-12-01', severity: 'critical', dataTypes: ['password', 'email', 'dob'], remediated: false },
    ];
  },

  async getRemediationActions(): Promise<RemediationAction[]> {
    await delay(500);
    return [
      { id: '1', title: 'Rotate compromised API keys', description: '4 API keys exposed in recent breach â€” rotate immediately and audit access logs.', priority: 'critical', status: 'open', assignee: 'Security Team', dueDate: '2024-12-20', category: 'Credentials' },
      { id: '2', title: 'Enable MFA for all admin accounts', description: '17 admin accounts lack MFA. Enable TOTP across all privileged accounts.', priority: 'critical', status: 'in-progress', assignee: 'IAM Team', dueDate: '2024-12-22', category: 'Authentication' },
      { id: '3', title: 'Patch CVE-2024-44487', description: 'Nginx version vulnerable to DoS. Update to 1.25.4+.', priority: 'high', status: 'open', assignee: 'DevOps', dueDate: '2024-12-25', category: 'Infrastructure' },
      { id: '4', title: 'Update Content Security Policy headers', description: 'CSP missing script-src directive, allowing XSS vectors.', priority: 'high', status: 'in-progress', assignee: 'Frontend Team', dueDate: '2024-12-28', category: 'Web Security' },
      { id: '5', title: 'Audit S3 bucket permissions', description: '3 S3 buckets have overly permissive IAM policies.', priority: 'medium', status: 'resolved', assignee: 'Cloud Team', dueDate: '2024-12-15', category: 'Cloud' },
    ];
  },

  async getThreatMetrics(): Promise<ThreatMetric[]> {
    await delay(400);
    return [
      { label: 'Fraud Prevented', value: 298, change: 12, unit: 'M USD', color: '#00ff9d' },
      { label: 'Active Threats', value: 47, change: -8, unit: '', color: '#ff4444' },
      { label: 'Accounts at Risk', value: 1284, change: 23, unit: '', color: '#ffaa00' },
      { label: 'Avg Risk Score', value: 68, change: 5, unit: '/100', color: '#4488ff' },
    ];
  },

  async getChartData(): Promise<ChartDataPoint[]> {
    await delay(300);
    const data: ChartDataPoint[] = [];
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      data.push({
        date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        riskScore: Math.floor(55 + Math.random() * 30),
        threats: Math.floor(30 + Math.random() * 40),
        resolved: Math.floor(20 + Math.random() * 30),
      });
    }
    return data;
  },
};
