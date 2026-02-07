
import React from 'react';
import { LEADERS } from '@/lib/constants/constants';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Leader } from '@/lib/types/types';

const TopLeaders = ({ leaders }: { leaders: Leader[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Perspective Leaders</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {leaders.map((leader, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 border-2 border-slate-50">
                  <AvatarImage src={leader.avatar} alt={leader.name} />
                  <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p>{leader.name}</p>
                  <p className="text-secondary">{leader.perspective}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-slate-900">{leader.percentage}%</span>
              </div>
            </div>
            {idx !== LEADERS.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopLeaders;
