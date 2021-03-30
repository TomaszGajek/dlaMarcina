import { createFeatureSelector, createSelector } from '@ngrx/store';
import { clubAdapter, ClubsState } from '../reducers/clubs.reducers';

const clubFeatureSelector = createFeatureSelector<ClubsState>('clubs');

export const getAllClubs = createSelector(
  clubFeatureSelector,
  clubAdapter.getSelectors().selectAll,
);
export const getLoading = createSelector(clubFeatureSelector, (state) => state.loading);
export const getError = createSelector(clubFeatureSelector, (state) => state.error);
