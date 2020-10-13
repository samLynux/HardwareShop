import { Variable } from '@angular/compiler/src/render3/r3_ast';

export interface Recipe
{
    id:string;
    imageUrl:string;
    merek:string;
    model:string;
    harga:string;
    stock:number;
    deskripsi:string;
    typeDetails:string[];
}