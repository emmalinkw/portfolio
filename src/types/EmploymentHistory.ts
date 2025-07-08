export interface EmploymentHistory {
  company: string;
  start: string;
  end: string;
  positions: Array<JobPosition>;
}

export interface JobPosition{
    title: string;
    start: string;
    end: string;
}