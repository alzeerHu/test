/**
 * Root reducer.
 * @module reducers/root
 */

import courseReducer from './courses/courses.reducer';

import defaultReducers from '@plone/volto/reducers';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  // Add your reducers here
  courseReducer
};



export default reducers;
