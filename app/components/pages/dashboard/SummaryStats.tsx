
import { HugeiconsIcon } from '@hugeicons/react';
import { Card, CardContent } from '@/components/ui/card';
import { SummaryStatistics } from '@/lib/types/types';

const StatCard = ({ label, value, icon }: SummaryStatistics) => (
  <Card className="flex hover:shadow-md">
    <CardContent className="flex justify-between">
      <div>
        <p className="text-xl md:text-2xl font-bold text-primary mb-0.5 md:mb-1">{value}</p>
        <p className="text-sm text-secondary capitalize">{label}</p>
      </div>
      <div className='mt-1'>
        <HugeiconsIcon className='text-red' icon={icon} />
      </div>
    </CardContent>
  </Card>
);

const SummaryStats = ({ stats }: { stats: SummaryStatistics[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
      {stats.map((stat, idx) => (
        <StatCard key={idx} label={stat.label} value={stat.value} icon={stat.icon} />
      ))}
    </div>
  );
};

export default SummaryStats;
