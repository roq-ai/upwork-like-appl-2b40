import * as yup from 'yup';

export const testCaseValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  task_id: yup.string().nullable().required(),
  tester_id: yup.string().nullable().required(),
});
