import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TestCaseInterface {
  id?: string;
  title: string;
  description?: string;
  status?: string;
  task_id: string;
  tester_id: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TestCaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  task_id?: string;
  tester_id?: string;
}
