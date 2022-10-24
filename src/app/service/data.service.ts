import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string) {
    return this.http.get(`${environment.baseURL}/${url}`);
  }

  getDetail(url: string, id: number) 
  {
    return this.http.get(`${environment.baseURL}/${url}/${id}`);
  }

  post(url: string, data) 
  {
    return this.http.post(`${environment.baseURL}/${url}`, {  
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
  }

  update(url: string, data) 
  {
    return this.http.put(`${environment.baseURL}/${url}`, {  
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
  }

  delete(url: string, id: number) {
    return this.http.get(`${environment.baseURL}/${url}/${id}`);
  }


}
