import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/interfaces/product.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public products = input.required<Product[]>();
}
