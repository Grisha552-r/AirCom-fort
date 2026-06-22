declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead(goalName: string) {
  if (typeof window === 'undefined') return;
  window.ym?.(109411009, 'reachGoal', goalName);
  window.gtag?.('event', 'generate_lead', { lead_type: goalName });
}
