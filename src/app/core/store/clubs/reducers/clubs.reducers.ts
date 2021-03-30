import { Club } from '@core/models/club.model';
import { ClubsActions } from '@core/store/clubs/actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

export interface ClubsState extends EntityState<Club> {
  loading: boolean;
  error: string;
}

export const clubAdapter: EntityAdapter<Club> = createEntityAdapter<Club>();

const clubsDefaultState: ClubsState = {
  ids: [],
  entities: {},
  loading: false,
  error: '',
};

export const initialState: ClubsState = clubAdapter.getInitialState(clubsDefaultState);

export const reducer = createReducer(
  initialState,
  // Even thought the `state` is unused, it helps infer the return type
  on(ClubsActions.getClubs, (state) => ({ ...state, loading: true })),
  on(ClubsActions.getClubsSuccess, (state, { clubs }) =>
    clubAdapter.setAll(clubs, { ...state, loading: false }),
  ),
  on(ClubsActions.getClubsFailure, (state) => ({
    ...state,
    loading: false,
    error: 'Nie udało się pobrać listy klubów',
  })),
);
