
"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Audit } from '@/lib/types/types';

const AuditReadiness = ({ data }: { data: Audit }) => {

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Audit Readiness</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="relative h-48 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.score}
                cx="50%"
                cy="80%"
                startAngle={180}
                endAngle={0}
                innerRadius={85}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
                cornerRadius={20}
              >
                {data.score.map((item, index) => (
                  <Cell key={`cell-${index}`} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-12">
            <span className="text-4xl font-bold">{data.completed}%</span>
            <p className="text-xs font-medium text-secondary mt-3">Readiness Level</p>
          </div>
        </div>
        <Separator />
        <div className="flex justify-evenly items-center flex-1 gap-12">
          <div className="text-center">
            <p className="text-2xl font-bold">{data.std}</p>
            <p className="text-sm text-secondary">Overdue Stds</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{data.missing}</p>
            <p className="text-sm text-secondary">Missing Evidence</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuditReadiness;
