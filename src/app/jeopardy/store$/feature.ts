import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Jeopardy } from '../api/interfaces';

import * as JeopardyActions from './actions';

export interface JeopardyState {
  jeopardy: Jeopardy[];
  query: string;
}

// wenn wir irgendein attribut hier löschen, müssen wir aufpassen beim laden....
export const initialState: JeopardyState = {
  jeopardy: [],
  query: ''
};

export const jeopardyFeature = createFeature({
  name: 'jeopardy',
  reducer: createReducer(
    initialState,
    on(JeopardyActions.search, (state, action) => ({
      ...state,
      query: action.query,
    })),
    on(JeopardyActions.overwriteState, (state, action) => ({
      ...action.newState
    }))
  ),
  extraSelectors: ({ selectQuery, selectJeopardy }) => {

    const selectFilteredJeopardy = createSelector(
      selectQuery,
      selectJeopardy,
      (query, jeopardy) => jeopardy.filter((jeopardy) => jeopardy.title.includes(query))
    );
    const selectFilteredJeopardyWithRating = createSelector(
      selectFilteredJeopardy,
      (jeopardy) => jeopardy.filter((jeopardy) => jeopardy.ratingsCount >= 1)
    );

    return { selectFilteredJeopardy, selectFilteredJeopardyWithRating };
  },
});
