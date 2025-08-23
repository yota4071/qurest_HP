interface IconProps {
  className?: string;
  size?: number;
}

export default function HandshakeIcon({ className = "", size = 24 }: IconProps) {
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
        d="M12 2L8 6L10 8L12 6L14 8L16 6L12 2Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M2 10L6 6L8 8L6 10L8 12L10 10L12 12L14 10L16 12L18 10L16 8L18 6L22 10L20 12L18 14L16 16L14 18L12 16L10 18L8 16L6 14L4 12L2 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L12 16L14 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}