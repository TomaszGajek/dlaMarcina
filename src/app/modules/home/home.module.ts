import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [HomeComponent, MapComponent, ListComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule, SharedModule],
  exports: [RouterModule],
})
export class HomeModule {}
