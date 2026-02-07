import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { CircularProgress } from "@/components/pages/strategy-planning/CircularProgress";
import SummaryStats from "@/components/pages/strategy-planning/SummaryStats";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Overview from "@/components/pages/strategy-planning/Overview";
import Leaders from "@/components/pages/strategy-planning/Leaders";
import Evidence from "@/components/pages/strategy-planning/Evidence";
import Comments from "@/components/pages/strategy-planning/Comments";
import RecentActivities from "@/components/shared/RecentActivities";

import { EVIDENCE, SUMMARY_STATS, ACTIVITIES, COMMENTS, OVERVIEW_DATA, LEADERS } from "@/lib/constants/constants";

const StrategyPlanning = () => {
  return (
    <div className="space-y-6 md:space-y-8 max-w-400 mx-auto pb-8">
      <div className="flex gap-3 items-center">
        <HugeiconsIcon icon={ArrowLeft02Icon} />
        <p className="font-bold">Digital Transformation Strategic Planning</p>
      </div>
      <Card>
        <CardContent>
          <div className="flex justify-between">
            <div className="space-y-2">
              <Badge variant="outline" className="border-muted py-1">
                <span className="text-secondary">Strategy & Planning</span>
              </Badge>
              <p className="font-bold capitalize">
                Digital Transformation Strategic Planning
              </p>
              <p className="text-secondary text-sm font-normal capitalize">
                Develop comprehensive strategic plans for digital transformation
                aligned with organizational goals
              </p>
            </div>
            <CircularProgress value={100} size={80} strokeWidth={6} />
          </div>
        </CardContent>
      </Card>

      <SummaryStats stats={SUMMARY_STATS} />
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="evidence">Evidence</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="gap-5 flex flex-col">
          <Overview overview={OVERVIEW_DATA} />
          <Leaders leaders={LEADERS} />
        </TabsContent>
        <TabsContent value="evidence" className="gap-5 flex flex-col">
          <Evidence data={EVIDENCE} />
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8">
              <Comments comments={COMMENTS} />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <RecentActivities activities={ACTIVITIES} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default StrategyPlanning;
