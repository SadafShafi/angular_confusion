import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http : HttpClient ) { }

  // getPromotions(): Promotion[] {
  //   return PROMOTIONS;
  // }

  getPromotions() {
    console.log(this.http.get(baseURL+'promotions'))
    return this.http.get(baseURL+'promotions');
    // return PROMOTIONS;
  }

  getPromotion(id: string) {
    return this.http.get(baseURL + 'promotions/' + id);
    // return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion() {
    return this.http.get(baseURL + 'promotions/featured');
    // return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }


  
}
