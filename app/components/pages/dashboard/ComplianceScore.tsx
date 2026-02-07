
"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { ComplianceScore } from '@/lib/types/types';

const ComplianceScore = ({ data }: { data: ComplianceScore[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Compliance Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
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
                {data.map((item, index) => (
                  <Cell key={`cell-${index}`} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-12">
            <span className="text-4xl font-bold">65%</span>
            <p className="text-xs font-medium text-secondary mt-3">Basic Standards 2025</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplianceScore;
