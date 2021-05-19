import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../Services/productService.service';
import { Category } from '../modelo/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

public categories: Category [];

  constructor(
    private productServiceService: ProductServiceService
  ) { }

  ngOnInit() {
    this.loadData();

  }

  loadData(){
    this.productServiceService.getCategories().subscribe(results =>{
      this.categories = results;
      console.log(this.categories);
    });
  }
}
