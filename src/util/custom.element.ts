import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: { attach: string; args: any };
    }
  }
}
