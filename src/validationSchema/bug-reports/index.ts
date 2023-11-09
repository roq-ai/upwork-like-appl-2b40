import * as yup from 'yup';

export const bugReportValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  severity: yup.string().nullable(),
  task_id: yup.string().nullable().required(),
  reporter_id: yup.string().nullable().required(),
  assignee_id: yup.string().nullable().required(),
});
