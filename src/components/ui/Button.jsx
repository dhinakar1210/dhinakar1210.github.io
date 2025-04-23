import React from 'react';

/**
 * Simple styled button wrapper.
 * Usage: <Button className="bg-blue-500">Click me</Button>
 */
export function Button({ children, className = '', ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
