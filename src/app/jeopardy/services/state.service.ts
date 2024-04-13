import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { JeopardyState, initialState, jeopardyFeature } from "../store$/feature";
import { overwriteState } from "../store$/actions";

const JEOPARDY_STATE_KEY = 'state:jeopardy';

@Injectable()
export class StateService {
  jeopardyState = initialState;
  constructor(private store: Store) {
    this.store.select<JeopardyState>(jeopardyFeature.selectJeopardyState).subscribe(state => this.jeopardyState = state);
    setInterval(() => {
      this.saveState();
    }, 1000);
    this.loadState();
  }

  private saveState() {
    localStorage?.setItem(JEOPARDY_STATE_KEY, JSON.stringify(this.jeopardyState));
  }
  
  private loadState() {
    try {
      const state = JSON.parse(localStorage.getItem(JEOPARDY_STATE_KEY)!);
      const newState: JeopardyState = Object.assign(initialState, (state));
      this.store.dispatch(overwriteState({ newState }));
    } catch (e) {
      console.error(e);
    }
  }
}
