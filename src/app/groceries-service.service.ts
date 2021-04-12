import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [
    {
      name: "Apple",
      quantity: 2
    },
    {
      name: "Sugar",
      quantity: 2
    },    
    {
      name: "Chicken",
      quantity: 2
    },    
    {
      name: "Bread",
      quantity: 2
    },    
    {
      name: "Milk",
      quantity: 2
    }
  ]

  constructor() { }
}
