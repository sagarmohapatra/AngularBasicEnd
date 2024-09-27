import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent {
  name: any = 'my name is sagar';
  date: any = new Date();
  value: any = 'this is test value';
  nameArr = ['sagar', 'sipu', 'rohot', 'dhoni', 'abhisek', 'sachin', 'forbin'];

  productArr = [
    { sno: 1, name: 'Mobile', price: '7000 rs', availabity: 'Available' },
    { sno: 2, name: 'Tv', price: '16000 rs', availabity: 'Not Available' },
    { sno: 3, name: 'Tab', price: '19000 rs', availabity: 'Available' },
    { sno: 4, name: 'Washing', price: '30000 rs', availabity: 'not Available' },
    { sno: 5, name: 'Laptop', price: '700000 rs', availabity: ' Available' },
    { sno: 6, name: 'Watch', price: '8000 rs', availabity: 'not Available' },
    { sno: 7, name: 'Dress', price: '15000 rs', availabity: 'not Available' },
    { sno: 8, name: 'Smart fan ', price: '4000 rs', availabity: ' Available' },
  ];
  namesearch: any = '';
  onAddProduct(add:any) {
    this.productArr.push({
      sno: 8,
      name: add.value,
      price: '4000 rs',
      availabity: ' Available',
    });
  }
}
