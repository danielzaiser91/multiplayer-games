import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as JeopardyActions from './actions';
// import { JeopardyService } from '../services/jeopardy.service';

@Injectable()
export class JeopardyEffects {
  getJeopardy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JeopardyActions.getJeopardy),
      tap(() => console.log('get Jeopardy action triggered this effect...'))
      // mergeMap(() => {
      //   return this.jeopardyService.getJeopardy().pipe(
      //     map((jeopardy) => JeopardyActions.getJeopardySuccess({ jeopardy })),
      //     catchError((error) =>
      //       of(JeopardyActions.getJeopardyFailure({ error: error.message }))
      //     )
      //   );
      // })
    )
  );

  constructor(
    private actions$: Actions,
    // private jeopardyService: JeopardyService
  ) {}
}
