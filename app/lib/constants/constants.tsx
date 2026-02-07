import { Files01Icon, FileSearchIcon, FileExportIcon, FileValidationIcon, ChartBarLineIcon, Folder01Icon, FolderCheck, FileSecurityIcon, FileVerifiedIcon, FileUploadIcon } from "@hugeicons/core-free-icons";
import { CategoryCard, Activity, Leader, Overview, Performance, DocumentRow, SummaryStatistics, DocumentStatus, Comment, Milestone, ComplianceScore, Audit } from "@/lib/types/types";

export const MILESTONES: Milestone[] = [
  { id: "1", date: "Mar 17", label: "Kickoff Workshop", status: "completed" },
  { id: "2", date: "March 18", label: "Data Collection", status: "in-progress" },
  { id: "3", date: "May 8", label: "Initial Phase", status: "upcoming" },
  { id: "4", date: "May 9–July 12", label: "Verification", status: "upcoming" },
  { id: "5", date: "July 13", label: "Completion Reviews", status: "upcoming" },
  { id: "6", date: "August 21", label: "Cycle Conclusion", status: "upcoming" },
];

export const STATISTICS: SummaryStatistics[] = [
  {
    "label": "Overall Progress",
    "value": "78.65%",
    "icon": ChartBarLineIcon
  },
  {
    "label": "Total Criteria",
    "value": "95",
    "icon": Folder01Icon
  },
  {
    "label": "Completed Criteria",
    "value": "52",
    "icon": FolderCheck
  },
  {
    "label": "Evidence Docs",
    "value": "386",
    "icon": FileSecurityIcon
  },
  {
    "label": "Evidence (Done)",
    "value": "302",
    "icon": FileVerifiedIcon
  },
  {
    "label": "DGA Uploads",
    "value": "258",
    "icon": FileUploadIcon
  }
];

export const CATEGORIES: CategoryCard[] = [
  {
    title: "Strategy And Planning",
    percentage: "97.78%",
    color: "bg-slate-800",
    subCategories: [
      {
        name: "Digital Transformation",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
        ],
      },
      {
        name: "Digital Governance",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "in-progress" },
        ],
      },
      {
        name: "Enterprise Architecture",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
          { id: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    title: "Organization And Culture",
    percentage: "70.83%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Digital Culture And Environment",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
        ],
      },
      {
        name: "Leadership Development",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
          { id: 4, status: "completed" },
        ],
      },
      {
        name: "Skills & Capacity Building",
        items: [
          { id: 1, status: "in-progress" },
          { id: 2, status: "in-progress" },
          { id: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    title: "Operations And Execution",
    percentage: "80.00%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Business Processes",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "in-progress" },
          { id: 3, status: "in-progress" },
          { id: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    title: "Business Continuity",
    percentage: "90.59%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Risk Management",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
          { id: 4, status: "completed" },
          { id: 5, status: "completed" },
        ],
      },
      {
        name: "Business Continuity",
        items: [
          { id: 1, status: "partially-uploaded" },
          { id: 2, status: "partially-uploaded" },
          { id: 3, status: "partially-uploaded" },
          { id: 4, status: "completed" },
          { id: 5, status: "completed" },
          { id: 6, status: "partially-uploaded" },
          { id: 7, status: "completed" },
        ],
      },
    ],
  },
  {
    title: "Information Technology",
    percentage: "75.00%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Support Systems",
        items: [
          { id: 1, status: "fully-uploaded" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
          { id: 4, status: "fully-uploaded" },
          { id: 5, status: "completed" },
        ],
      },
      {
        name: "IT Infrastructure",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
          { id: 4, status: "completed" },
          { id: 5, status: "fully-uploaded" },
          { id: 6, status: "fully-uploaded" },
          { id: 7, status: "completed" },
        ],
      },
      {
        name: "Cloud Infrastructure",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "fully-uploaded" },
          { id: 3, status: "fully-uploaded" },
        ],
      },
    ],
  },
  {
    title: "Comprehensive Governance",
    percentage: "64.44%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Governance Platforms",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "partially-uploaded" },
          { id: 3, status: "completed" },
          { id: 4, status: "partially-uploaded" },
          { id: 5, status: "completed" },
          { id: 6, status: "completed" },
          { id: 7, status: "completed" },
          { id: 8, status: "completed" },
          { id: 9, status: "completed" },
        ],
      },
    ],
  },
  {
    title: "Channels And Services",
    percentage: "100%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Service Quality",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
        ],
      },
      {
        name: "Digital Channels",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "completed" },
          { id: 4, status: "completed" },
        ],
      },
    ],
  },
  {
    title: "Beneficiary Centralization",
    percentage: "60.00%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "User Engagement",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "in-progress" },
          { id: 3, status: "in-progress" },
          { id: 4, status: "in-progress" },
        ],
      },
      {
        name: "User Relationship",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "in-progress" },
          { id: 3, status: "in-progress" },
        ],
      },
      {
        name: "User Experience",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "in-progress" },
          { id: 3, status: "completed" },
          { id: 4, status: "in-progress" },
          { id: 5, status: "completed" },
        ],
      },
    ],
  },
  {
    title: "Government Data",
    percentage: "87.50%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Data Governance",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "in-progress" },
          { id: 3, status: "in-progress" },
        ],
      },
      {
        name: "Data Usage & Availability",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "in-progress" },
          { id: 3, status: "in-progress" },
        ],
      },
      {
        name: "Open Data",
        items: [
          { id: 1, status: "completed" },
          { id: 2, status: "completed" },
          { id: 3, status: "in-progress" },
        ],
      },
    ],
  },
  {
    title: "Research And Innovation",
    percentage: "17.65%",
    color: "bg-slate-700",
    subCategories: [
      {
        name: "Innovation",
        items: [
          { id: 1, status: "delayed" },
          { id: 2, status: "delayed" },
          { id: 3, status: "delayed" },
          { id: 4, status: "delayed" },
        ],
      },
      {
        name: "Creative Solutions",
        items: [
          { id: 1, status: "in-progress" },
          { id: 2, status: "delayed" },
        ],
      },
    ],
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: "1",
    type: "upload",
    user: "Ahmed Khaled",
    content: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    time: "5 Mins Ago",
  },
  {
    id: "2",
    type: "task",
    user: "Mona Hamed",
    content: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    time: "20 Mins Ago",
  },
  {
    id: "3",
    type: "criterion",
    user: "Admin",
    content: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    time: "1 Hour Ago",
  },
];

export const LEADERS: Leader[] = [
  {
    name: "Ahmed Al-Ali",
    perspective: "Strategy Perspective",
    percentage: 96,
    avatar: "https://picsum.photos/seed/ahmed/100/100",
  },
  {
    name: "Sarah Al-Khaled",
    perspective: "Beneficiary Perspective",
    percentage: 94,
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    name: "Mohammad Al-Mansour",
    perspective: "IT Perspective",
    percentage: 92,
    avatar: "https://picsum.photos/seed/mohammed/100/100",
  },
];

export const COMPLIANCE: ComplianceScore[] = [
  { label: 'Completed', value: 65, color: '#DB1F26' },
  { label: 'Remaining', value: 35, color: '#F5F8FB' },
];

export const PERFORMANCE_DATA: Performance[] = [
  { month: "Jan", value: 85 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 78 },
  { month: "Apr", value: 45 },
  { month: "May", value: 85 },
  { month: "Jun", value: 76 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 85 },
  { month: "Sept", value: 76 },
  { month: "Oct", value: 55 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 76 },
];

export const AUDIT_READINESS: Audit = {
  completed: 80,
  std: 12,
  missing: 4,
  score: [
    { label: 'Ready', value: 80, color: '#1EA54E' },
    { label: 'Remaining', value: 20, color: '#F5F8FB' },
  ]
}

export const OVERVIEW_DATA: Overview[] = [
  {
    title: "Objective",
    description:
      "Develop a digital transformation strategy aligned with the organization’s strategy and the objectives of Saudi Vision 2030.",
  },
  {
    title: "Implementation Requirements",
    description: `Prepare a digital transformation strategy for the transition to electronic government transactions, including the following:
A. The organization's vision, mission, strategic pillars, and strategic objectives, and their alignment with the organization’s overall strategy.
B. Strategic initiatives, programs, and performance indicators.
C. A clear methodology for integration and coordination with relevant external entities to achieve the strategy’s objectives.
D. Required competencies, capabilities, and skills necessary to achieve the strategy’s objectives`,
  },
  {
    title: "Evidence Documents",
    description:
      "Submit the approved digital transformation strategy that includes all the requirements of this standard, provided that it has been approved within a period not exceeding 36 months.",
  },
  {
    title: "Related Regulations",
    description:
      "Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause (16).",
  },
  { title: "Scope", description: "All government entities." },
];

export const EVIDENCE: DocumentRow[] = [
  {
    "documentNumber": "5.4.1.1",
    "documentName": "Digital_Transformation_Plan.Pdf",
    "documentLead": "Ahmed Khaled",
    "documentPreparer": "Ahmed Khaled",
    "date": "2025-08-01",
    "dueDate": "2025-08-01",
    "status": DocumentStatus.APPROVED
  },
  {
    "documentNumber": "5.4.1.2",
    "documentName": "KPI_Framework.Xlsx",
    "documentLead": "Mona Hamed",
    "documentPreparer": "Mona Hamed",
    "date": "2025-08-01",
    "dueDate": "2025-08-01",
    "status": DocumentStatus.PENDING_REVIEW
  },
  {
    "documentNumber": "5.4.1.3",
    "documentName": "Roadmap_Version1.Docx",
    "documentLead": "Rami AlSharif",
    "documentPreparer": "Rami AlSharif",
    "date": "2025-08-01",
    "dueDate": "2025-08-01",
    "status": DocumentStatus.PENDING_REVIEW
  }
];

export const COMMENTS: Comment[] = [
  {
    author: "Sara Ibrahim",
    content: "Ensure the plan includes a clear governance model.",
    date: "2025-08-05",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    author: "Mona Hamed",
    content: "Ensure the plan includes a clear governance model.",
    date: "2025-08-05",
    avatar: "https://picsum.photos/seed/mona/100/100",
  }
];

export const SUMMARY_STATS: SummaryStatistics[] = [
  {
    label: "Total Evidence",
    value: 4,
    icon: Files01Icon
  },
  {
    label: "Under Review Evidence",
    value: 3,
    icon: FileSearchIcon
  },
  {
    label: "In Progress Evidence",
    value: 2,
    icon: FileExportIcon
  },
  {
    label: "Completed Evidence",
    value: 1,
    icon: FileValidationIcon
  }
];

export const YEARS: number[] = [
  2026, 2025, 2024, 2023
]
