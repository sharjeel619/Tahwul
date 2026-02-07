import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ACTIVITIES } from '@/lib/constants/constants';
import { Activity } from '@/lib/types/types';

const RecentActivities = ({ activities }: { activities: Activity[] }) => {
  return (
    <Card className='gap-0'>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <Separator className='my-3' />
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx}>
            <div className="flex justify-between gap-3 mb-4">
              <div className='flex w-3/4 gap-5 sm:gap-3'>
                <div className='min-w-1.5 h-1.5 rounded-full bg-red mt-2.5'></div>
                <p className="font-medium">
                  {activity.content}
                </p>
              </div>
              <p className="text-xs text-secondary mt-1">
                {activity.time}
              </p>
            </div>
            {idx !== ACTIVITIES.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
