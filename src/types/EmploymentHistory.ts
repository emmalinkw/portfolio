import type { JobPosition } from "./JobPosition";

export interface EmploymentHistory {
  company: string;
  start: string;
  end: string;
  positions: Array<JobPosition>;
}
