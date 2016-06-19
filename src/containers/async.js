import { asyncConnect } from 'redux-connect';

const defaultPromise = Promise.resolve();

const async = (
  resolve = defaultPromise
) => (
  asyncConnect([{
    promise: (options) => {
      const payload = {
        ...options,
        getState: options.store.getState,
        dispatch: options.store.dispatch
      };

      return resolve(payload);
    }
  }])
);

export default async;
