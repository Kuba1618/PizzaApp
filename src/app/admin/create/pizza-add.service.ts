import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pizza } from 'src/app/models/pizza';

@Injectable({
    providedIn: 'root'
  })


export class PizzaAddService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    addPizza(data: { name: any; description: any;}) {
        return this.http.post(`${this.baseUrl}/pizza/add`, data);
      }

}