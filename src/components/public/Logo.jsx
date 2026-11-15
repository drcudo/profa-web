import { Image } from '@/components/ui/image';

const LOGO_URL = 'https://media.base44.com/images/public/6aa9625197a137cd137235fc/7bf7fcb7b_Logo.png';

export default function Logo({ className = '' }) {
  return (
    <div className={`bg-white overflow-hidden flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src={LOGO_URL}
        fittingType="fit"
        className="w-full h-full"
        alt="Profa - Pripreme iz matematike"
      />
    </div>
  );
}