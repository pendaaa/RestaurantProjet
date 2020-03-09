  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable, from } from 'rxjs';
  import { Plat } from '../Models/plat';
  import { URL } from 'src/environments/environment';
  import { Restaurant } from '../Models/restaurant';

  @Injectable({
    providedIn: 'root'
  })
  export class PlatsService {

    token = window.localStorage.getItem('token');;

    constructor(private httpClient : HttpClient) { }

    postPlat(plat : Plat): Observable<Plat> {
      return this.httpClient.post<Plat>(URL + "/plats",plat,{
        headers: {
          Authorization: `Bearer ${this.token}`,
        },}).pipe();
    }
    getPlats():Observable<Plat[]>
    {
      return this.httpClient.get<Plat[]>(URL+"/plats").pipe();
    }

    getPlat(id :number):Observable<Plat>
    {
      return this.httpClient.get<Plat>(URL+'/plats/'+id).pipe();
    }

    deletePlat(id : number)
    {
      return this.httpClient.delete(URL+'/plats/'+id,{
        headers: {
          Authorization: `Bearer ${this.token}`,
        },}).pipe();
    }
    

   updatePlat(id : number, plat) : Observable <Plat>
    {
      return this.httpClient.put<Plat>(URL+'/plats/'+id, plat,{
        headers: {
          Authorization: `Bearer ${this.token}`,
        },}).pipe();
    }

     /*updatePlat( plat: Plat)
  {
    return this.httpClient.put<Plat>(URL+'/plats/'+plat.id,plat).pipe();
  }*/

    getRestaurants(): Observable<Restaurant[]> {
      return this.httpClient.get<Restaurant[]>(URL + '/restaurants').pipe();
    }

  }
