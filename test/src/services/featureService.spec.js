import sinon              from 'sinon';
import { featureService } from 'services';

describe('featureService', () => {
  let response;
  let expectedResult;
  let mockResponseJson;
  let mockFetch;
  let result;

  beforeEach(() => {
    response = { json: () => {} };
    expectedResult = { status: 200, data: 'result' };

    mockResponseJson = sinon.stub(response, 'json').returns(Promise.resolve(expectedResult));
    mockFetch = sinon.stub(window, 'fetch').returns(Promise.resolve(response));
  });

  afterEach(() => {
    window.fetch.restore();
  });

  describe('getFeatures', () => {
    beforeEach(async () => {
      result = await featureService.getFeatures();
    });

    it('should call fetch to retrieve the features', () => mockFetch.should.have.been.called);
    it('should convert the result to JSON', () => mockResponseJson.should.have.been.called);
    it('should retrieve the result', () => result.should.be.equal(expectedResult));
  });
});
