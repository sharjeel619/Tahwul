import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { SortingAZ02Icon } from "@hugeicons/core-free-icons";

import { DocumentRow, DocumentStatus } from "@/lib/types/types";

const Status = ({ status }: { status: DocumentStatus }) => {
  const colors = status === DocumentStatus.APPROVED ? "bg-accent-green/10! text-accent-green!" : status === DocumentStatus.PENDING_REVIEW ? "bg-accent-yellow/10! text-accent-yellow!" : "";
  return (
    <Badge className={colors}>
      {status}
    </Badge>
  )
}

const Evidence = ({ data }: { data: DocumentRow[] }) => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader className="bg-grey">
            <TableRow className=" border-0!">
              <TableHead>
                <div className="flex items-center gap-2">
                  <span>Document Number </span><HugeiconsIcon size={12} icon={SortingAZ02Icon} className="text-secondary" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <span>Document Name </span><HugeiconsIcon size={12} icon={SortingAZ02Icon} className="text-secondary" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <span> Document Lead </span><HugeiconsIcon size={12} icon={SortingAZ02Icon} className="text-secondary" />
                </div>

              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <span>  Document Preparer</span><HugeiconsIcon size={12} icon={SortingAZ02Icon} className="text-secondary" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <span> Date</span><HugeiconsIcon size={12} icon={SortingAZ02Icon} className="text-secondary" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  <span> Due Date</span><HugeiconsIcon size={12} icon={SortingAZ02Icon} className="text-secondary" />
                </div>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex items-center justify-center gap-2">
                  <span>Status</span><HugeiconsIcon size={12} icon={SortingAZ02Icon} className="text-secondary" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.documentNumber}>
                <TableCell className="font-medium">{item.documentNumber}</TableCell>
                <TableCell className="font-medium">{item.documentName}</TableCell>
                <TableCell>{item.documentLead}</TableCell>
                <TableCell>{item.documentPreparer}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell className="text-center">
                  <Status status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Evidence;