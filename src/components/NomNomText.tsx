interface NomNomTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NomNomText({ className = "", children }: NomNomTextProps) {
  return (
    <span className={`font-bangers text-blue-600 ${className}`}>
      {children || "Nom!Nom!"}
    </span>
  );
}