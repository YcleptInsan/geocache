import { Component, OnInit } from '@angular/core';
import { GeocacheLocationService } from '../geocache-location.service';
import { Location } from '../location.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-geo-form',
  templateUrl: './geo-form.component.html',
  styleUrls: ['./geo-form.component.css'],
  providers: [ GeocacheLocationService]
})
export class GeoFormComponent {

  GeoCodeResponse: string = null;
  LatitudeLongitudeResponse: string = null;


  constructor(private geoLocation: GeocacheLocationService) { }

  getLatandLong(lat: string, lng: string) {
    this.geoLocation.getLocationsApiLatLong(lat, lng).subscribe(response => {
      this.GeoCodeResponse = response.json().result[0].formatted_address;
    });
    console.log(this.LatitudeLongitudeResponse);
    console.log(this.GeoCodeResponse);
  }

  getGeoCache(address: string, city: string, state: string) {
    this.geoLocation.getLocationsApiByAddress(address, city, state).subscribe(response => {
      this.LatitudeLongitudeResponse = response.json().result[0].geometry.location;
    });
  }
}
