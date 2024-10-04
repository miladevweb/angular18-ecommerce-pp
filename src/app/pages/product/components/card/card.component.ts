import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
})
export class CardComponent {
  public product = input.required<Product>();
}
