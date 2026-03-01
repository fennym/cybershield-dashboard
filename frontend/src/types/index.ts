export interface RiskScore {
  id: string;
  domain: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  trend: 'up' | 'down' | 'stable';
  lastUpdated: string;
  category: string;
}

export interface CompromisedAccount {
  id: string;
  email: string;
  breachSource: string;
  breachDate: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  dataTypes: string[];
  remediated: boolean;
}

export interface RemediationAction {
  id: string;
  title: string;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'open' | 'in-progress' | 'resolved';
  assignee: string;
  dueDate: string;
  category: string;
}

export interface ThreatMetric {
  label: string;
  value: number;
  change: number;
  unit: string;
  color: string;
}

export interface ChartDataPoint {
  date: string;
  riskScore: number;
  threats: number;
  resolved: number;
}
