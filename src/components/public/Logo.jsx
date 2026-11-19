const LOGO_URL = '/images/logo.png';

export default function Logo({ className = '' }) {
  return (
    <div className={`bg-white overflow-hidden flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={LOGO_URL}
        className="w-full h-full object-contain"
        alt="Profa - Pripreme iz matematike"
      />
    </div>
  );
}