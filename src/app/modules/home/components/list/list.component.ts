import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  clubs = [
    'Czarni Słupsk',
    'Grudziądz Olimpia',
    'Gdańsk Zadymiarze z Zaspy',
    'Arka Gdynia',
    'Lech Poznań',
  ];
}
