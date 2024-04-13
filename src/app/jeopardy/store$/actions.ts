import { createAction, props } from '@ngrx/store';
import { Jeopardy } from '../api/interfaces';
import { JeopardyState } from './feature';

export const getJeopardy = createAction('[Jeopardy] Get Jeopardy');
export const getJeopardySuccess = createAction(
  '[Jeopardy] Get Jeopardy success',
  props<{ jeopardy: Jeopardy[] }>()
);
export const getJeopardyFailure = createAction(
  '[Jeopardy] Get Jeopardy failure',
  props<{ error: string }>()
);
export const search = createAction(
  '[Jeopardy] search',
  props<{ query: string }>()
);
export const overwriteState = createAction('[Jeopardy] overwriteState', props<{ newState: JeopardyState }>());
