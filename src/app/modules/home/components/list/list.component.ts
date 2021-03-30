import { Component, OnInit } from '@angular/core';
import { Club } from '@core/models/club.model';
import { ClubActionTypes } from '@core/store/clubs/actions/clubs.actions';
import { getAllClubs } from '@core/store/clubs/selectors/clubs.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  clubs$: Observable<Club[]> = this.store.select(getAllClubs);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch({ type: ClubActionTypes.GET_CLUBS });
  }
}
