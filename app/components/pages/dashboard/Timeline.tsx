import { Milestone } from "@/lib/types/types";

const ProjectTimeline = ({ milestones }: { milestones: Milestone[] }) => {
  const completedCount = milestones.filter(
    (m) => m.status === "completed" || m.status === "in-progress",
  ).length;
  const progressPercent = (completedCount / milestones.length) * 100;

  return (
    <div>
      <div className="hidden md:block relative">
        <div className="h-3.5 bg-grey rounded-xl overflow-hidden">
          <div
            className="h-full bg-success rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="relative">
          <div className="flex justify-between">
            {milestones.map((milestone, index) => {
              return (
                <div
                  key={milestone.id}
                  className="flex flex-col items-center"
                  style={{
                    width:
                      index === 0 || index === milestones.length - 1
                        ? "auto"
                        : "0",
                    position: "relative",
                  }}
                >
                  <div
                    className={`w-2.5 h-2.5 -mt-3 rounded-full z-10 ${
                      milestone.status !== "upcoming" ? "bg-white" : "bg-red"
                    }`}
                  />

                  <div className="mt-3 text-center whitespace-nowrap">
                    <p className="text-sm text-secondary">{milestone.date}</p>
                    <p className="text-sm">{milestone.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:hidden flex gap-4">
        {/* Progress bar */}
        <div className="relative w-2 flex-shrink-0">
          <div className="absolute inset-0 bg-grey rounded-full" />
          <div
            className="absolute top-0 bg-success rounded-full transition-all duration-500"
            style={{ height: `${progressPercent}%`, width: "100%" }}
          />
        </div>

        {/* Milestones */}
        <div className="flex flex-col gap-6 pb-2">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="flex gap-3 items-start">
              <div
                className={`mt-1 w-3 h-3 rounded-full ${
                  milestone.status !== "upcoming" ? "bg-success" : "bg-red"
                }`}
              />

              <div>
                <p className="text-sm text-secondary">{milestone.date}</p>
                <p className="text-sm font-medium">{milestone.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
