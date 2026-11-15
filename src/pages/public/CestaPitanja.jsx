import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/lib/demoData';
import { revealClass } from '@/lib/reveal';
import CurveDivider from '@/components/public/CurveDivider';

export default function CestaPitanja() {
  const [open, setOpen] = useState(-1);

  return (
    <div>
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h1 className="font-display text-4xl font-bold text-primary">Česta pitanja</h1>
          <p className="text-lg text-muted-foreground mt-3">Sve što te zanima o pripremama, zadaćama i praćenju napretka.</p>
        </div>
      </section>

      <CurveDivider variant="wave" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-3">
        {faqItems.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={revealClass(i, 'bg-background border border-border rounded-2xl shadow-sm overflow-hidden')}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-primary">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}