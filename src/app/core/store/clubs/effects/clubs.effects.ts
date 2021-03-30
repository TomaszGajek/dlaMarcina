import { Injectable } from '@angular/core';
import { ClubsService } from '@core/services/clubs.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ClubActionTypes, getClubsSuccess } from '../actions/clubs.actions';

@Injectable()
export class ClubsEffects {
  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClubActionTypes.GET_CLUBS),
      mergeMap(() =>
        this.clubsService.getClubs().pipe(
          map((clubs) => getClubsSuccess({ clubs })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  // eslint-disable-next-line no-empty-function
  constructor(private clubsService: ClubsService, private actions$: Actions) {}
}
