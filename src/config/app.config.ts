interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['QA Manager'],
  customerRoles: ['Client'],
  tenantRoles: ['Business Owner', 'QA Manager', 'QA Tester', 'Admin'],
  tenantName: 'Company',
  applicationName: 'upwork like application for QAs',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Manage own user data',
    'Read project information',
    'Read task information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage user information',
    'Manage project details',
    'Manage bug reports and test cases',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/532f72a1-cf43-4170-b1d5-8381130c79d3',
};
