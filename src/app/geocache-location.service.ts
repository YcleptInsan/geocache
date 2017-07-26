import { geoKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GeocacheLocationService{

  constructor(private http: Http) { }

  getLocationsApiLatLong(lat: string, lng: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + geoKey)
  }

  getLocationsApiByAddress(address: string , city: string , state: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + address + "," + city + "," + state  + "&key=" + geoKey)
  }

}
