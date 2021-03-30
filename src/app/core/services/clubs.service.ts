import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '@core/models/club.model';

import { of, Observable } from 'rxjs';

const clubs: Club[] = [
  { id: 1, title: 'Czarni Słupsk' },
  { id: 2, title: 'Grudziądz Olimpia' },
  { id: 3, title: 'Gdańsk Zadymiarze z Zaspy' },
  { id: 4, title: 'Arka Gdynia' },
  { id: 5, title: 'Lech Poznań' },
];

@Injectable({ providedIn: 'root' })
export class ClubsService {
  // eslint-disable-next-line no-empty-function
  constructor(private http: HttpClient) {}

  getClubs(): Observable<Club[]> {
    return of(clubs);
  }
}
