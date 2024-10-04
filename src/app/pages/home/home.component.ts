import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@shared/interfaces/product.interface';
import { ProductService } from '@core/services/product.service';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  template: ` <app-hero [products]="products" /> `,
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  private service = inject(ProductService);

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.log(err),
    });
  }
}
