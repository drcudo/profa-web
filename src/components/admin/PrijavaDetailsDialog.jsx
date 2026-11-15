import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const rowsFor = (item) => [
  ['Učenik', `${item.student_first_name} ${item.student_last_name}`],
  ['Program', item.program],
  ['Škola', item.student_school],
  ['Grad', item.student_city],
  ['Telefon učenika', item.student_phone],
  ['Roditelj', `${item.parent_first_name} ${item.parent_last_name}`],
  ['E-mail roditelja', item.parent_email],
  ['Telefon roditelja', item.parent_phone],
  ['Poruka', item.message || '-'],
];

export default function PrijavaDetailsDialog({ item, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary">Prijava: {item?.student_first_name} {item?.student_last_name}</DialogTitle>
        </DialogHeader>
        {item && (
          <dl className="divide-y divide-border text-sm">
            {rowsFor(item).map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-3 py-2.5">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="col-span-2 text-foreground break-words">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </DialogContent>
    </Dialog>
  );
}