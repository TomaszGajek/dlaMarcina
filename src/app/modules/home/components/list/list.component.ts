import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  clubs: string[] = ['Czarni Słupsk', 'Grudziądz Olimpia', 'Gdańsk Zadymiarze z Zaspy', 'Arka Gdynia', 'Lech Poznań'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.clubs);
  }

}
