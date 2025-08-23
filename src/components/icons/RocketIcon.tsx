interface IconProps {
  className?: string;
  size?: number;
}

export default function RocketIcon({ className = "", size = 24 }: IconProps) {
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
        d="M12 2L8 6L12 10L16 6L12 2Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M12 2C12 2 8 6 8 10C8 14 10 16 12 16C14 16 16 14 16 10C16 6 12 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
      <path
        d="M6 14L8 16L8 20L10 22L14 22L16 20L16 16L18 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 18L12 16L16 18"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}