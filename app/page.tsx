import Timeline from "@/components/pages/dashboard/Timeline";
import SummaryStats from "@/components/pages/dashboard/SummaryStats";
import ProgressStatus from "@/components/pages/dashboard/ProgressStatus";
import ComplianceScore from "@/components/pages/dashboard/ComplianceScore";
import TopLeaders from "@/components/pages/dashboard/TopLeaders";
import RecentActivities from "@/components/shared/RecentActivities";
import PerformanceChart from "@/components/pages/dashboard/PerformanceChart";
import AuditReadiness from "@/components/pages/dashboard/AuditReadiness";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  YEARS,
  MILESTONES,
  STATISTICS,
  CATEGORIES,
  COMPLIANCE,
  LEADERS,
  ACTIVITIES,
  PERFORMANCE_DATA,
  AUDIT_READINESS,
} from "./lib/constants/constants";

const Dashboard = () => {
  return (
    <div className="space-y-6 md:space-y-8 max-w-400 mx-auto pb-8">
      <Card className="overflow-hidden">
        <CardHeader className="flex  items-center justify-between">
          <CardTitle>Project Timeline</CardTitle>
          <NativeSelect defaultValue={YEARS[0]}>
            <NativeSelectOption disabled>Select a year</NativeSelectOption>
            {YEARS.map((year, idx) => (
              <NativeSelectOption key={idx} value={year}>
                {year}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </CardHeader>
        <CardContent className="px-2 md:px-6">
          <Timeline milestones={MILESTONES} />
        </CardContent>
      </Card>

      <SummaryStats stats={STATISTICS} />

      <ProgressStatus categories={CATEGORIES} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComplianceScore data={COMPLIANCE} />
        <TopLeaders leaders={LEADERS} />
        <RecentActivities activities={ACTIVITIES} />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
          <PerformanceChart data={PERFORMANCE_DATA} />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
          <AuditReadiness data={AUDIT_READINESS} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
