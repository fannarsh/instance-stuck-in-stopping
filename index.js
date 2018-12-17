'use strict';

var bunyan = require('bunyan');
var payload = require('./post.raw.json');

var config = {
  name: 'halts-on-logging',
  version: '1.0.0',
  log_level: 'info'
};

var log = bunyan.createLogger({
  name: config.name,
  version: config.version,
  level: config.log_level,
  serializers: bunyan.stdSerializers
});

log.info('hi');
log.info({ payload: payload }, 'got post');
log.info('after post');
