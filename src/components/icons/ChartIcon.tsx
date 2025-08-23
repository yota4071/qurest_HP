interface IconProps {
  className?: string;
  size?: number;
}

export default function ChartIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="16"
        width="4"
        height="6"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <rect
        x="10"
        y="10"
        width="4"
        height="12"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <rect
        x="17"
        y="6"
        width="4"
        height="16"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <rect
        x="3"
        y="16"
        width="4"
        height="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="10"
        y="10"
        width="4"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="17"
        y="6"
        width="4"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M5 16L12 10L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}