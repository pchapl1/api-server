'use strict';

const validator = require('./validator');

describe('Test validator middleware', () => {
  test('Should test if request includes name', () => {
    const request = {
      query: {
        name: 'Phil'
      }
    };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);
    expect(request.query.name).toEqual('Phil');
  });
});
