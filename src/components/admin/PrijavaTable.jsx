import { format } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function PrijavaTable({ items, onSelect }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-36">Datum</TableHead>
            <TableHead>Učenik</TableHead>
            <TableHead>Program</TableHead>
            <TableHead>Roditelj</TableHead>
            <TableHead className="text-right">Detalji</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className="cursor-pointer" onClick={() => onSelect(item)}>
              <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                {item.created_date ? format(new Date(item.created_date), 'dd.MM.yyyy. HH:mm') : '-'}
              </TableCell>
              <TableCell className="text-sm font-medium text-foreground">
                {item.student_first_name} {item.student_last_name}
              </TableCell>
              <TableCell className="text-sm text-primary">{item.program}</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {item.parent_first_name} {item.parent_last_name}
                <span className="block text-xs">{item.parent_email}</span>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); onSelect(item); }}>
                  Otvori
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}