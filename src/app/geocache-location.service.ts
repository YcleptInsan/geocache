import { Injectable } from '@angular/core';
import { geoKey } from './api-keys';
import { Http, Response } from '@angular/http';


@Injectable()
export class GeocacheLocationService {

  constructor(private http: Http) { }

  getLocationsApiCall(lat: string, long: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=" + geoKey)
  }

}
