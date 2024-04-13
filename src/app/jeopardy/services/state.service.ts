import { Inject, Injectable, afterRender } from "@angular/core";
import { Store } from "@ngrx/store";
import { JeopardyState, initialState, jeopardyFeature } from "../store$/feature";
import { overwriteState } from "../store$/actions";
import { DOCUMENT } from "@angular/common";

const JEOPARDY_STATE_KEY = 'state:jeopardy';

@Injectable()
export class StateService {
  jeopardyState = initialState;

  constructor(private store: Store) {
    addEventListener('beforeunload', () => {
      this.saveState();
    });
    this.loadState();
    this.store.select<JeopardyState>(jeopardyFeature.selectJeopardyState).subscribe(state => this.jeopardyState = state);
  }

  private saveState() {
    localStorage.setItem(JEOPARDY_STATE_KEY, JSON.stringify(this.jeopardyState));
  }
  
  private loadState() {
    try {
      const state = JSON.parse(localStorage.getItem(JEOPARDY_STATE_KEY) as string);
      const newState: JeopardyState = Object.assign({}, initialState, state);
      this.store.dispatch(overwriteState({ newState }));
    } catch (e) {
      console.error(e);
    }
  }
}
