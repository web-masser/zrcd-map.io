import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { MapModule } from './map/map.module';

import { AppComponent } from './app.component';
import { MapDirective } from './directive/map.directive';
import { MapModule } from './map/map.module';

@NgModule({
  declarations: [AppComponent, MapDirective],
  imports: [BrowserModule, AppRoutingModule, MapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
