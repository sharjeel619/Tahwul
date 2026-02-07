import { IconSvgElement } from "@hugeicons/react";

export interface StatusItem {
  id: number;
  status:
    | "not-started"
    | "in-progress"
    | "completed"
    | "partially-uploaded"
    | "fully-uploaded"
    | "delayed";
}

export interface Milestone {
  id: string;
  date: string;
  label: string;
  status: "completed" | "in-progress" | "upcoming";
}

export interface SubCategory {
  name: string;
  items: StatusItem[];
}

export interface CategoryCard {
  title: string;
  percentage: string;
  subCategories: SubCategory[];
  color: string;
}

export interface Activity {
  id: string;
  type: string;
  user: string;
  time: string;
  content: string;
}

export interface ComplianceScore {
  label: string;
  value: number;
  color: string;
}

export interface Audit {
  completed: number;
  std: number;
  missing: number;
  score: ComplianceScore[];
}

export interface Leader {
  name: string;
  perspective: string;
  percentage?: number;
  avatar: string;
}

export interface Overview {
  title: string;
  description: string;
}

export interface Performance {
  month: string;
  value: number;
}

export enum DocumentStatus {
  APPROVED = "Approved",
  PENDING_REVIEW = "Pending Review",
}

export interface DocumentRow {
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: DocumentStatus;
}

export interface Comment {
  author: string;
  content: string;
  date: string;
  avatar: string;
}

export interface SummaryStatistics {
  label: string;
  value: number | string;
  icon: IconSvgElement;
}
