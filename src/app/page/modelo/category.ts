import { ICategories } from '../interface/iCategories';
import { set, get } from 'lodash-es';
export class Category implements ICategories {

constructor(data){
set(this,'data', data);
}

get id(){

  return get(this,'data.id');
}

get name(){

  return get(this,'data.neme');
}
get img(){

  return get(this,'data.img');
}

}

