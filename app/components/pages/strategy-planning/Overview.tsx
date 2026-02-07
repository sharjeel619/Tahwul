
import {
  Card,
} from "@/components/ui/card";
import type { Overview } from "@/lib/types/types";

const Overview = ({ overview }: { overview: Overview[] }) => {
  return (
    <Card className="p-0">
      <div className="rounded-xl ">
        {overview.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-3 rounded-lg p-4 md:grid-cols-[220px_1fr]"
          >
            <div className="rounded-[10px] bg-[#1B35570D] px-4 py-3 font-medium">
              {item.title}
            </div>
            <div className="rounded-[10px] bg-[#F5F8FA] px-4 py-3">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </Card >
  )
}
export default Overview;