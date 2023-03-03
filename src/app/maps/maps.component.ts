import { Component, OnInit } from '@angular/core';
import { NguiMap, NguiMapComponent } from '@ngui/map';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  markers =[[34.7430757,10.7393285]]
  map:any
  constructor() { }

  ngOnInit() { }
  onClick() {
    this.markers.push([34.7430757,10.7393285])
  }
  onSave(){
    console.log(this.map.markers)
  }
  onMapReady(map) {
    this.map=map;
  }

}
