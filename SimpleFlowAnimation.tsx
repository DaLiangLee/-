import React from 'react';

interface SimpleFlowAnimationProps {
  className?: string;
  duration?: number;
  color?: string;
  isActive?: boolean;
}

const SimpleFlowAnimation: React.FC<SimpleFlowAnimationProps> = ({
  className = '',
  duration = 2.5,
  color = '#8B5CF6',
  isActive = true
}) => {
  if (!isActive) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* 流动渐变 */}
          <linearGradient id="simpleFlowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="30%" stopColor={color} stopOpacity="0.6" />
            <stop offset="70%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* 精确的流动路径 - 基于您的最新调试结果 */}
        <path
          d="M 49.7 13.2 L 80.4 13.8 L 80.4 46.4 Q 76.0 46.6 71.6 46.8"
          stroke="url(#simpleFlowGradient)"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="5 25"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="30"
            to="0"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* 流动的小点 */}
        <circle r="1" fill={color} opacity="0.9">
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            path="M 49.7 13.2 L 80.4 13.8 L 80.4 46.4 Q 76.0 46.6 71.6 46.8"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0.5;0"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* 第二个延迟的流动点 */}
        <circle r="0.8" fill={color} opacity="0.7">
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            path="M 49.7 13.2 L 80.4 13.8 L 80.4 46.4 Q 76.0 46.6 71.6 46.8"
            begin="1.2s"
          />
          <animate
            attributeName="opacity"
            values="0;0.7;0.7;0.3;0"
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>

        {/* 第三个流动点增强效果 */}
        <circle r="0.6" fill={color} opacity="0.5">
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            path="M 49.7 13.2 L 80.4 13.8 L 80.4 46.4 Q 76.0 46.6 71.6 46.8"
            begin="2.4s"
          />
          <animate
            attributeName="opacity"
            values="0;0.5;0.5;0.2;0"
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin="2.4s"
          />
        </circle>
      </svg>
    </div>
  );
};

export default SimpleFlowAnimation; 
