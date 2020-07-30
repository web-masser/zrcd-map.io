import { Injectable } from '@angular/core';

import { BmapService } from './bmap.service';
import { GmapService } from './gmap.service';

import ol from 'openlayers';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(
    private bmapService: BmapService,
    private gmapService: GmapService
  ) {}

  initialize() {
    // 三个参数必须存在
    var map = new ol.Map({
      target: 'map',
      layers: [
        this.gmapService.imageLayer(),
        // this.bmapService.imageLayer('map'),
        // this.bmapService.imageLayer('label'),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4,
      }),
    });
  }
}
