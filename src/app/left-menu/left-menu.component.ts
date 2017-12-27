import {Component, OnInit, state, style} from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  links = [
    "Item master file",
    "Finished goods prices",
    "Customer specific special prices and discounts",
    "Goods receive note",
    "Finished goods recipeis",
    "Finished goods quality parameters",
    "Test results of sample quality checks of finished goods",
    "Row material stock",
    "Finished goods stock",
    "Returned finished goods stock",
    "Stock requests for production",
    "Issue items for production",
    "Stock transfers for agenceis",
    "Multiple location row materials",
    "Sock Verification",
    "Stock adjustments",
    "Inventory reports"
];

   selected = 0;

  select(item) {
    this.selected = item;
  };
  isActive(item) {
    return this.selected === item;
  };

  constructor() { }

  ngOnInit() {

  }

}
