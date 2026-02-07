import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CardContent, Card, CardHeader, CardTitle } from '@/components/ui/card';
import type { Leader } from '@/lib/types/types';

const LeaderCard = ({ name, perspective, avatar }: Leader) => {
  return (
    <div className='bg-grey p-3 rounded-xl'>
      <div className='flex items-center gap-3'>
        <Avatar size='lg' className="w-8 h-8 border bg-muted border-slate-200">
          <AvatarImage src={avatar} alt="User" />
          <AvatarFallback>MO</AvatarFallback>
        </Avatar>
        <div>
          <p className='font-semibold'>{name}</p>
          <p className='text-secondary'>{perspective}</p>
        </div>
      </div>
    </div>
  )
}

const Leaders = ({ leaders }: { leaders: Leader[] }) => {
  return (
    <Card>
      <CardHeader className='gap-0'>
        <CardTitle className="text-sm mt-0">Leaders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
          {leaders.map((leader, idx) => (
            <LeaderCard key={idx} name={leader.name} perspective={leader.perspective} avatar={leader.avatar} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Leaders;