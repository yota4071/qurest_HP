interface IconProps {
  className?: string;
  size?: number;
}

export default function BuildingIcon({ className = "", size = 24 }: IconProps) {
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
        x="4"
        y="8"
        width="16"
        height="14"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <rect
        x="4"
        y="8"
        width="16"
        height="14"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8 2L12 6L16 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="7" y="11" width="2" height="2" fill="currentColor" />
      <rect x="11" y="11" width="2" height="2" fill="currentColor" />
      <rect x="15" y="11" width="2" height="2" fill="currentColor" />
      <rect x="7" y="15" width="2" height="2" fill="currentColor" />
      <rect x="11" y="15" width="2" height="2" fill="currentColor" />
      <rect x="15" y="15" width="2" height="2" fill="currentColor" />
      <rect x="10" y="18" width="4" height="4" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}