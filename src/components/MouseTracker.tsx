import { useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

const MouseTracker = () => {
 return (
    <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          zIndex: 1001
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)',
          zIndex: 1001
        }}
        
      />
    );
};

export default MouseTracker;