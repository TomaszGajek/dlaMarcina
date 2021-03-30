import { Club } from '@core/models/club.model';
import { createAction, props } from '@ngrx/store';

export enum ClubActionTypes {
  GET_CLUBS = '[GET CLUBS]',
  GET_CLUBS_SUCCESS = '[GET CLUBS SUCCESS]',
  GET_CLUBS_FAILURE = '[GET CLUBS FAILURE]',
}

export const getClubs = createAction(ClubActionTypes.GET_CLUBS);

export const getClubsSuccess = createAction(
  ClubActionTypes.GET_CLUBS_SUCCESS,
  props<{ clubs: Club[] }>(),
);

export const getClubsFailure = createAction(ClubActionTypes.GET_CLUBS_FAILURE);
