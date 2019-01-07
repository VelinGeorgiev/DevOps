// tslint:disable:import-name
import * as request from 'supertest';
import server from "../src/main";

describe('greeter function', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  //jest.useFakeTimers();

  //const name: string = 'John';

  //let hello: string;

  // Act before assertions
  beforeAll(() => {
    //const p: Promise<string> = greeter(name);
    //jest.runOnlyPendingTimers();
    //hello = await p;
  });

  afterAll(()=> {
    require('../src/main').stop();
    // server.close(()=>{

    //   console.log('HTTP server is successfully shutdown.');
    //   done();
    // });
  })

  it('server successfully calls "/" path', (done: any) => {

    request(server).get('/').then((res: any) => {

      expect(res.status).toEqual(200);
      done();

    });
  });

  // Assert greeter result
  it('greets a user with message', (done: any) => {
    const authenticatedRequest = request.agent();

    authenticatedRequest
      .post('')
      .send()
      .end();

      request(server).get('/').then((res: any) => {

        expect(res.status).toEqual(200);
        done();
      });
  });

  it('greets a user with message 1', () => {
    expect(1).toBe(1);
  });
});