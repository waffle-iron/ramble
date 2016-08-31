'use strict';

const rambleTestUrl = 'http://localhost:3000';

describe('testing ramble service', () => {
  beforeEach(() => {
    angular.mock.module('ramble');
    angular.mock.inject((rambleService, authService, $httpBackend) => {
      this.authService = authService;
      this.rambleService = rambleService;
      this.httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.httpBackend.verifyNoOutstandingRequest();
    this.httpBackend.verifyNoOutstandingExpectation();
  });

  it('should get some entries', () => {
    const authString = this.authService.getToken();
    const headers = {
      'Accept':'application/json',
      'Authorization': `Bearer ${authString}`
    };

    this.httpBackend.expectGET(`${rambleTestUrl}/api/entries`, headers)
    .respond(200, [
      {id: 1, title: 'fake title', keywords: ['key', 'word']},
      {id: 2, title: 'fake title two', keywords: ['key', 'two']}
    ]);

    this.rambleService.fetchEntries()
    .then(res => {
      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
    });
  });

  it('should post an entry', () => {
    const authString = this.authService.getToken();
    const post = {id: 3, title: 'fake title three', keywords: ['key', 'word', 'three']};
    const headers = {
      'Accept':'application/json',
      'Authorization': `Bearer ${authString}`,
      'Content-Type':'application/json;charset=utf-8'
    };

    this.httpBackend.expectPOST(`${rambleTestUrl}/api/entry`, post, headers)
    .respond(200, [
      {id: 1, title: 'fake title', keywords: ['key', 'word']},
      {id: 2, title: 'fake title two', keywords: ['key', 'two']},
      {id: 3, title: 'fake title three', keywords: ['key', 'word', 'three']}
    ]);

    this.rambleService.createEntry(post)
    .then(res => {
      expect(res.status).toBe(200);
      expect(Array.isArray(res.data)).toBe(true);
    });
  });
});
