import { BugReportInterface } from 'interfaces/bug-report';
import { TestCaseInterface } from 'interfaces/test-case';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  project_id: string;
  created_at?: any;
  updated_at?: any;
  bug_report?: BugReportInterface[];
  test_case?: TestCaseInterface[];
  project?: ProjectInterface;
  _count?: {
    bug_report?: number;
    test_case?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  project_id?: string;
}
