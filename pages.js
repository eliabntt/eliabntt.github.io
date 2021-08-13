const ghpages = require('gh-pages');
const pathname = `${__dirname}/build`;
const repoURL = 'https://github.com/eliabntt/eliabntt.github.io';

ghpages.publish(
  pathname,
  {
    branch: 'deploy',
    repo: repoURL
  },
  err => {
    if (err) console.log('ERROR: ', err);
    else console.log('PUBLISHED');
  }
);
