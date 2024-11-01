import pkg from './node_modules/shevchenko/package.json';

const baseUrl = 'https://shevchenko-js.tooleks.com';
const websiteName = new URL(baseUrl).hostname;
const currentYear = new Date().getFullYear();

export default {
  website: {
    url: baseUrl,
    email: 'shevchenko-js@tooleks.com',
    copyright: `© 2017-${currentYear} ${websiteName}`,
  },
  library: {
    displayName: `${pkg.name}.js`,
    name: pkg.name,
    version: pkg.version,
    apiSpecificationUrl: `${baseUrl}/api-spec`,
    npmUrl: 'https://www.npmjs.com/package/shevchenko',
    gitHubUrl: 'https://github.com/tooleks/shevchenko-js',
    dockerHubUrl: 'https://hub.docker.com/r/tooleks/shevchenko',
    issuesUrl: 'https://github.com/tooleks/shevchenko-js/issues',
    licenseUrl: 'https://github.com/tooleks/shevchenko-js/blob/master/LICENSE',
    cdnUrl: 'https://unpkg.com/shevchenko',
  },
  militaryExtension: {
    name: 'shevchenko-ext-military',
    gitHubUrl: 'https://github.com/tooleks/shevchenko-ext-military',
  },
  content: {
    gitHubUrl: 'https://api.github.com/repos/tooleks/shevchenko-js',
    howItWorksUrl: 'https://raw.githubusercontent.com/wiki/tooleks/shevchenko-js/Принцип-роботи.md',
  },
};
