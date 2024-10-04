import { ResolveFn } from '@angular/router';

export const productsResolver: ResolveFn<string> = (route, _state) => {
  const id = route.paramMap.get('id');
  return id ? `Product - ${id}` : 'No product selected';
};
