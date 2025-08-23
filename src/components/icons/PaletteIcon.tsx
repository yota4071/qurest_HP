interface IconProps {
  className?: string;
  size?: number;
}

export default function PaletteIcon({ className = "", size = 24 }: IconProps) {
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
        d="C12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.1 22 14 21.1 14 20C14 19.5 13.8 19.1 13.5 18.8C13.2 18.5 13 18.1 13 17.6C13 16.5 13.9 15.6 15 15.6H17C19.76 15.6 22 13.36 22 10.6C22 5.8 17.2 2 12 2Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}