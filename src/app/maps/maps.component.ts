import { Component, OnInit } from '@angular/core';
import { NguiMap, NguiMapComponent } from '@ngui/map';
import { Client } from 'app/models/client.model';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})


export class MapsComponent implements OnInit {
 // markers =[[34.7430757,10.7393285]]
 markers: google.maps.Marker[] = [];
 clients: Client[];
 listClients : Client[]=[];
  map:any
  selectedName: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() { 
    this.clientService.getAllClients().subscribe(
      (clients: Client[]) => {
          this.clients = clients;
      },
      (error: any) => {
          console.error('Failed to get clients:', error);
      }
  );
  }
  onClick() {
    this.clients.forEach(client => { 
      if(!client.maps)
          this.listClients.push(client);
    this.isWindowOpen = true;
     })}
  onSave(){
    alert("Your changes has been saved")
    }
  
  onSelectNew(){
    console.log(this.selectedName)
    const markerOptions: google.maps.MarkerOptions = {
      position: { lat:34.7430757 , lng: 10.7393285},
      draggable: true,
      label: {
        text: this.selectedName,
        color: 'black', 
        fontSize: '12px',
      },
    }
    const marker = new google.maps.Marker(markerOptions);
    marker.setMap(this.map);
    this.markers.push(marker);
      
      this.isWindowOpen = false;
  }
  parseLocation(locationStr: string) {
    const [lat, lng] = locationStr.split(',').map(parseFloat);
    return { lat, lng };
  }
 
  onMarkerClick(marker: google.maps.Marker): void {
      const result = window.confirm('Are you sure you want to delete this marker?');
      if (result) {
        marker.setMap(null); 
      } else {
        return;
      }
    }
    
  
onMapReady(map: google.maps.Map): void {
  this.map = map;

  this.clients.forEach(client => {
    const markerPosition: google.maps.LatLngLiteral = this.parseLocation(client.maps);
    const markerOptions: google.maps.MarkerOptions = {
      position: markerPosition,
      draggable: true,
      label: {
        text: client.name, 
        color: 'black', 
        fontSize: '12px',
      },
    };
    const marker = new google.maps.Marker(markerOptions);
    marker.setMap(this.map);
    this.markers.push(marker);
    marker.addListener('dblclick', () => this.onMarkerClick(marker));
  });
}

isWindowOpen = false;

toggleWindow() {
  this.isWindowOpen = !this.isWindowOpen;
}
  
}
