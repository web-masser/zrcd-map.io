import { Injectable } from '@angular/core';

import ol from 'openlayers';

@Injectable({
  providedIn: 'root',
})
export class GmapService {
  constructor() {}

  // 底图
  imageLayer() {
    return new ol.layer.Tile({
      source: new ol.source.TileImage({
        url:
          'http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G',
      }),
    });
  }
}
