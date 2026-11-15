import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { programs } from '@/lib/demoData';
import PrijavaTable from '@/components/admin/PrijavaTable';
import PrijavaDetailsDialog from '@/components/admin/PrijavaDetailsDialog';

const programOptions = [...programs.map((p) => p.name), 'Individualne instrukcije 1 na 1'];

export default function Prijave() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [program, setProgram] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    base44.entities.Prijava.
    filter(program ? { program } : {}, { sort: '-created_date', limit: 200 }).
    then((res) => {if (alive) setItems(res.items ?? []);}).
    finally(() => {if (alive) setLoading(false);});
    return () => {alive = false;};
  }, [program]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="w-full flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="w-4 h-4" /> Natrag na stranicu
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold text-primary">Prijave</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            {loading ? 'Učitavanje...' : `${items.length} prijava`}
          </p>
        </div>
        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
          
          <option value="">Svi programi</option>
          {programOptions.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      {loading ?
      <div className="py-16 grid place-items-center text-muted-foreground">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div> :
      items.length === 0 ?
      <div className="border border-dashed border-border rounded-2xl py-16 text-center text-sm text-muted-foreground">
          Još nema prijava za odabrani program.
        </div> :

      <PrijavaTable items={items} onSelect={setSelected} />
      }

      <PrijavaDetailsDialog item={selected} open={!!selected} onOpenChange={(v) => !v && setSelected(null)} />
      </div>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 Profa. Administracijski pregled prijava.</span>
          <Link to="/prijave" className="font-medium text-primary hover:underline">
            Prijave (administracija)
          </Link>
        </div>
      </footer>
    </div>);

}