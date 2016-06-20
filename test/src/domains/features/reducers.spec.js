import { actionTypes, reducers } from 'domains/features';

describe('features reducer', () => {
  const features        = [{ title: 1 }, { title: 2 }, { title: 3 }];
  const selectedFeature = features[0];
  const ignoredFeature  = features[1];

  let state;
  let action;
  let result;

  describe('when the state is empty', () => {
    before(() => {
      state = {};
    });

    describe('and no action is triggered', () => {
      before(() => {
        action  = {};
        result  = reducers(state, action);
      });

      it('should return the initial state', () => result.should.be.deep.equal(state));
    });

    describe('and features are fetched', () => {
      before(() => {
        action  = { type: actionTypes.FETCH_FEATURES, payload: features };
        result  = reducers(state, action);
      });

      it('should store the features', () => result.allFeatures.should.be.deep.equal(features));
      it('should not select any feature', () => result.selectedFeatures.should.be.empty);
    });
  });

  describe('when there are features set', () => {
    before(() => {
      state = { allFeatures: features, selectedFeatures: [] };
    });

    describe('and no selected features', () => {
      describe('and a feature is selected', () => {
        before(() => {
          action  = { type: actionTypes.SELECT_FEATURE, payload: selectedFeature };
          result  = reducers(state, action);
        });

        it('should only select the feature', () => result.selectedFeatures.should.be.deep.equal([selectedFeature]));
        it('should remove the feature from the collection', () => result.allFeatures.should.not.include(selectedFeature));
      });

      describe('and a feature is ignored', () => {
        before(() => {
          action  = { type: actionTypes.IGNORE_FEATURE, payload: ignoredFeature };
          result  = reducers(state, action);
        });

        it('should remove the feature from the collection', () => result.allFeatures.should.not.include(ignoredFeature));
        it('should not change the selected features', () => result.selectedFeatures.should.be.deep.equal(state.selectedFeatures));
      });
    });

    describe('and some selected features', () => {
      before(() => {
        state = { allFeatures: features, selectedFeatures: features[2] };
      });

      describe('and a feature is selected', () => {
        before(() => {
          action  = { type: actionTypes.SELECT_FEATURE, payload: selectedFeature };
          result  = reducers(state, action);
        });

        it('should select the feature', () => result.selectedFeatures.should.include(selectedFeature));
        it('should remove the feature from the collection', () => result.allFeatures.should.not.include(selectedFeature));
      });

      describe('and a feature is ignored', () => {
        before(() => {
          action  = { type: actionTypes.IGNORE_FEATURE, payload: ignoredFeature };
          result  = reducers(state, action);
        });

        it('should remove the feature from the collection', () => result.allFeatures.should.not.include(ignoredFeature));
        it('should not change the selected features', () => result.selectedFeatures.should.be.deep.equal(state.selectedFeatures));
      });
    });
  });
});
