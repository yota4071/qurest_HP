interface IconProps {
  className?: string;
  size?: number;
}

export default function LaptopIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 17H22L20 20H4L2 17Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <rect
        x="4"
        y="5"
        width="16"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="6"
        y="7"
        width="12"
        height="6"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
}