import React from 'react';

/** 
 * Wraps its children in a styled card container.
 * Usage: <Card className="p-6">…</Card>
 */
export function Card({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

/** 
 * Optionally split out a content wrapper if you want,
 * or just reuse Card directly.
 */
export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}
