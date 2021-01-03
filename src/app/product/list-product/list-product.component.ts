import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';
import {AngularFireStorage} from '@angular/fire/storage';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  id = -1;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  // tslint:disable-next-line:typedef
  getAllProduct() {
    this.productService.getAllProduct().subscribe(result => {
      this.products = result;
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.productService.getAllProduct().subscribe(listProduct => {
        this.products = listProduct;
      });
    });
  }



}
