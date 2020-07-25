const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
const config = require('../config');
const { expect } = chai;

describe('Posts endpoints', () => {
  it('GET all posts', async () => {
    let response = await agent.get(`http://localhost:${config.port}/posts`);
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body.error).to.equal(false);
    expect(response.body.body.length).to.gt(0);
  });
});
