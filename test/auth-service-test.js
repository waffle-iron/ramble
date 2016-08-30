'use strict';

const url = 'http://localhost:3000';

describe('testing auth service', () => {
  beforeEach(() => {
    angular.mock.module('ramble');
    angular.mock.inject((authService, $httpBackend) => {
      this.authService = authService;
      this.httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.httpBackend.verifyNoOutstandingRequest();
    this.httpBackend.verifyNoOutstandingExpectation();
  });

  it('signin should return a token', () => {
    const user = {
      user: 'fakeuser',
      pass: 'fakepass'
    };
    const authString = 'dW5kZWZpbmVkOnVuZGVmaW5lZA==';
    const headers = {
      'Accept':'application/json',
      'Authorization': `Basic: ${authString}`
    };

    this.httpBackend.expectGET(`${url}/api/signin`, headers)
    .respond(200, 'randomTokenHere');

    this.authService.signin(user)
    .then(data => {
      expect(data).toBe('randomTokenHere');
    });
  });

  it('should sign-up a user', () => {
    const user = {
      user: 'fakeuser',
      pass: 'fakepass'
    };
    const headers = {
      'Content-Type':'application/json',
      'Accept':'application/json'
    };

    this.httpBackend.expectPOST(`${url}/api/signup`, user, headers)
    .respond(200, 'randomTokenHere');

    this.authService.signup(user)
    .then(data => {
      expect(data).toBe('randomTokenHere');
    });
  });
});
