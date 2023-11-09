import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BugReportInterface {
  id?: string;
  title: string;
  description?: string;
  status?: string;
  severity?: string;
  task_id: string;
  reporter_id: string;
  assignee_id: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  user_bug_report_reporter_idTouser?: UserInterface;
  user_bug_report_assignee_idTouser?: UserInterface;
  _count?: {};
}

export interface BugReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  severity?: string;
  task_id?: string;
  reporter_id?: string;
  assignee_id?: string;
}
