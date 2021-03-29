import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, MapComponent, ListComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule, SharedModule],
  exports: [RouterModule],
})
export class HomeModule {}
