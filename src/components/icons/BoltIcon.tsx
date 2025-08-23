interface IconProps {
  className?: string;
  size?: number;
}

export default function BoltIcon({ className = "", size = 24 }: IconProps) {
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
        d="M13 2L4.09 12.97C3.74 13.41 4.06 14 4.59 14H10L11 22L19.91 11.03C20.26 10.59 19.94 10 19.41 10H14L13 2Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M13 2L4.09 12.97C3.74 13.41 4.06 14 4.59 14H10L11 22L19.91 11.03C20.26 10.59 19.94 10 19.41 10H14L13 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}