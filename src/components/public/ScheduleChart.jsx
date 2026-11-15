import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = [
  'hsl(227 11% 24%)',
  'hsl(355 100% 75%)',
  'hsl(205 83% 55%)',
  'hsl(152 56% 40%)',
  'hsl(32 95% 50%)',
  'hsl(280 65% 60%)',
];

export default function ScheduleChart({ schedule }) {
  const data = schedule.map((u) => ({ name: u.unit, value: u.weeks, lessons: u.lessons }));
  const totalWeeks = schedule.reduce((s, u) => s + u.weeks, 0);
  const totalLessons = schedule.reduce((s, u) => s + u.lessons, 0);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="relative h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              stroke="hsl(var(--background))"
              strokeWidth={2}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, _name, props) => {
                const pct = Math.round((value / totalWeeks) * 100);
                return [`${pct}% · ${value} termina · ${props.payload.lessons} lekcija`, props.payload.name];
              }}
              contentStyle={{ borderRadius: '0.75rem', border: '1px solid hsl(var(--border))', fontSize: '0.8rem' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-display text-3xl font-bold text-primary">{totalWeeks}</span>
          <span className="text-xs text-muted-foreground">termina</span>
          <span className="text-xs text-muted-foreground mt-1">{totalLessons} lekcija</span>
        </div>
      </div>

      <ul className="space-y-2.5">
        {schedule.map((u, i) => (
          <li key={u.unit} className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
            <span className="text-sm text-foreground flex-1">{u.unit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}