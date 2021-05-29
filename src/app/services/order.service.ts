import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = `${environment.baserUrl}${environment.port}`;

  amountToPay: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  products: BehaviorSubject<any> = new BehaviorSubject<any>(
    Product
  );

  constructor(private http: HttpClient) { }

  getAllPizza() {
    return this.http.get(`${this.baseUrl}/api/pizza/get`);
  }
}
