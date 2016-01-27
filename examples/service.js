'use strict';

const Tutum = require('../lib/tutum');

const tutum = new Tutum({
  /* eslint-disable no-process-env */
  username: process.env.TUTUM_USERNAME || '',
  apiKey: process.env.TUTUM_APIKEY || ''
  /* eslint-enable no-process-env */
});

tutum.post('service', {
  image: 'tutum/hello-world'
}, (err, res) => {
  if (err) {
    throw err;
  }
  /* eslint-disable no-console */
  console.log(res);
  /* eslint-enable no-console */
});
