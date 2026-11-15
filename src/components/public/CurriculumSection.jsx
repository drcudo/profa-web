import { BookOpen, FileText } from 'lucide-react';

// Prikaz cjelina i lekcija u stilu tablice sadržaja (sa stranicama zadataka i rješenja).
export default function CurriculumSection({ curriculum }) {
  if (!curriculum || curriculum.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <span className="w-11 h-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
          <BookOpen className="w-5 h-5" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">Sadržaj po lekcijama</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Pregled svih cjelina i lekcija s pripadajućim zadacima i rješenjima.</p>
        </div>
      </div>

      <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        {curriculum.map((c, ci) => {
          const isSpecial = c.lessons.length === 0;
          return (
            <div key={ci} className={isSpecial ? '' : 'space-y-3'}>
              {/* Cjelina / posebna stavka */}
              <div className="flex items-baseline gap-2">
                <h3 className={`font-display font-bold text-primary ${isSpecial ? 'text-base' : 'text-lg'}`}>{c.cjelina}</h3>
                {c.page != null && (
                  <>
                    <span className="flex-1 border-b border-dotted border-border mb-1.5" />
                    <span className="text-sm font-mono text-muted-foreground">{c.page}</span>
                  </>
                )}
              </div>

              {/* Lekcije */}
              {c.lessons.length > 0 && (
                <div className="ml-2 sm:ml-4 space-y-3 border-l-2 border-secondary pl-4">
                  {c.lessons.map((l, li) => (
                    <div key={li} className="space-y-1.5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-foreground whitespace-nowrap">{l.lekcija}</span>
                        <span className="flex-1 border-b border-dotted border-border mb-1" />
                      </div>
                      <div className="ml-3 sm:ml-5 space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-muted-foreground flex items-center gap-1.5 whitespace-nowrap">
                            <FileText className="w-3.5 h-3.5" /> Zadaci
                          </span>
                          <span className="flex-1 border-b border-dotted border-border/60 mb-0.5" />
                          <span className="text-xs font-mono text-muted-foreground">{l.zadaci}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-muted-foreground flex items-center gap-1.5 whitespace-nowrap">
                            <FileText className="w-3.5 h-3.5" /> Rješenja zadataka
                          </span>
                          <span className="flex-1 border-b border-dotted border-border/60 mb-0.5" />
                          <span className="text-xs font-mono text-muted-foreground">{l.rjesenja}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}