// tslint:disable:import-name
import * as request from 'supertest';
import server from "../src/main";

describe('greeter function', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  //jest.useFakeTimers();

  //const name: string = 'John';

  //let hello: string;

  // Act before assertions
  beforeAll(async () => {
    //const p: Promise<string> = greeter(name);
    //jest.runOnlyPendingTimers();
    //hello = await p;
  });

  it('delays the greeting by 2 seconds', (done: any) => {

    request(server).get('/').then((res: any) => {

      expect(res.status).toEqual(300);
      done();

    }).catch((err: any) => {

      done.fail(new Error(err));
      done();

    });
  });

  // Assert greeter result
  it('greets a user with message', () => {
    expect(1).toBe(1);
  });

  it('greets a user with message 1', () => {
    expect(1).toBe(1);
  });
});