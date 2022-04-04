
import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import {baseURL } from '../shared/baseUrl';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dishService: DishService,
    @Inject('baseURL') private baseURL
    ) { 

      console.log("menu thingy yo ");
      console.log(baseURL);

    }

    errMess: string;

  ngOnInit() {
    // this.dishService.getDishes()
    //   .then(dishes => this.dishes = dishes);

    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);

  }
  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

 

}
