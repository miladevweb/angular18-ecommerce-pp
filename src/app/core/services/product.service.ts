import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { Product } from '@shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private title = inject(Title);
  private url = environment.API_URL;
  private http = inject(HttpClient);

  public setTitle(id: string) {
    return this.title.setTitle(`Product - ${id}`);
  }

  public getProduct(id: string) {
    return this.http.get<Product>(`${this.url}/products/${id}`);
  }

  public getProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }
}
