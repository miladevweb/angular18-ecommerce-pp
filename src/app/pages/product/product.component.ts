import { catchError, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@shared/interfaces/product.interface';
import { ProductService } from '@core/services/product.service';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent],
  template: `<app-card [product]="product" />`,
})
export class ProductComponent implements OnInit {
  public product!: Product;
  private _route = inject(ActivatedRoute);
  private _productService = inject(ProductService);

  private _handleError(error: unknown) {
    if (error instanceof Error) {
      return throwError(() => new Error(error.message));
    }
    return throwError(() => new Error('An unknown error occurred'));
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this._productService
      .getProduct(id!)
      .pipe(catchError(this._handleError))
      .subscribe({
        next: (product) => (this.product = product),
        error: (err) => console.log(err, '❌❌❌'),
      });
  }
}
