import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AircraftService {
  constructor(private http: HttpClient) {}

  //liste de tous les avions en base => une fois sur 2 on souhaite provoquer une erreur
  public getAircrafts(): Observable<Aircraft[]> {
    let host =
      Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(host + '/aircrafts');
  }

  //liste des avions en phase de design
  public getDesignedAircrafts(): Observable<Aircraft[]> {
    console.log('getDesign');
    return this.http.get<Aircraft[]>(
      environment.host + 'aircrafts?desing=true' //retourner les avions en cours de design
    );
  }

  //liste des avios en phase de développement
  public getDeveloppementAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(
      environment.host + 'aircrafts?developpment=true'
    );
  }

  //renvoi un avion à partir de l'id
  public getAircraftsByMsn(id: number): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + '/aircrafts/' + id);
  }
}
