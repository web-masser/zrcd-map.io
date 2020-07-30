import { Injectable } from '@angular/core';
import ol from 'openlayers';

@Injectable({
  providedIn: 'root',
})
export class BmapService {
  public resolutions: Array<number> = [];

  constructor() {}

  // 分辨率
  resolution() {
    for (let i = 0; i < 18; i++) {
      this.resolutions[i] = Math.pow(2, 18 - i);
    }
  }

  // 瓦片
  tileGrids() {
    this.resolution();
    console.log(this.resolutions);
    return new ol.tilegrid.TileGrid({
      origin: [0, 0],
      resolutions: this.resolutions,
    });
  }

  // 影像
  imageService(mapOrLabel: string) {
    const projection = ol.proj.get('EPSG:3857');
    return new ol.source.TileImage({
      projection: projection,
      tileGrid: this.tileGrids(),
      tileUrlFunction: (tileCoord, pixelRatio, proj) => {
        console.log(tileCoord, pixelRatio, proj);
        if (!tileCoord) return '';
        var z = tileCoord[0];
        var x = tileCoord[1];
        var y = tileCoord[2];
        if (x < 0) x = 'M' + -x;
        if (y < 0) y = 'M' + -y;
        switch (mapOrLabel) {
          case 'map':
            return `http://shangetu0.map.bdimg.com/it/u=x=${x};y=${y};z=${z};v=009;type=sate&fm=46&udt=20200505`;
          case 'label':
            return `http://online0.map.bdimg.com/onlinelabel/?qt=tile&x=${x}&y=${y}&z=${z}&styles=sl&udt=20170620&scaler=1&p=1`;
        }
      },
    });
  }

  imageLayer(mapOrLabel: string) {
    return new ol.layer.Tile({
      source: this.imageService(mapOrLabel),
    });
  }
}
