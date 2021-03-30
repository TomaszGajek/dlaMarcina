import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { ClubsEffects } from '@core/store/clubs/effects/clubs.effects';
import { reducer } from '@core/store/clubs/reducers/clubs.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({ clubs: reducer }),
    EffectsModule.forRoot([ClubsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
