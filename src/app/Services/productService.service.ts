import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ICategories } from '../page/interface/iCategories';
import { IProduct } from '../page/interface/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

constructor(
  private afd: AngularFireDatabase
) { }

getProducts(idCategory: number){
return this.afd.list<IProduct>('products',ref => ref.orderByChild('idcategory').equalTo(idCategory)).valueChanges();

}

getCategories(){
  return this.afd.list<ICategories>('categories').valueChanges();
}



}
