import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft.model';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

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
    return this.http.get<Aircraft[]>(
      environment.host + '/aircrafts?design=true' //retourner les avions en cours de design
    );
  }

  //liste des avions en phase de développement
  public getDevelopmentAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(
      environment.host + '/aircrafts?development=true'
    );
  }

  //renvoi un avion à partir de l'id
  public getAircraftsByMsn($id: any): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(
      environment.host + '/aircrafts?prog_like=' + $id.payload.search
    );
  }
}
