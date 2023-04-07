'use strict';

const logger = require('./logger');

describe('Test logger middleware', () => {
  test('Should log request in console', () => {
    const req = {
      method: 'get',
      path: 'path'
    };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);
    expect(req.method).toEqual('get');
  });
});
