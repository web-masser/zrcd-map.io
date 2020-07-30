import { Component, OnInit } from '@angular/core';

import { MapService } from './service/map.service';
import ol from 'openlayers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.initialize();
  }
}
