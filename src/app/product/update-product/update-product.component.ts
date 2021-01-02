import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product = {};
  id = -1;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.product = await this.getProductByPromise(this.id);
      // this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getProduct(id: number) {
    this.productService.getProductById(id).subscribe(value => {
      this.product = value;
    });
  }
  // tslint:disable-next-line:typedef
  getProductByPromise(id: number) {
    return this.productService.getProductById(id).toPromise();
  }

  // tslint:disable-next-line:typedef
  updateProduct(id: number) {
    this.productService.updateProduct(id, this.product).subscribe(() => {
      console.log('Thành Công');
    }, () => {
      console.log('Xảy ra lỗi');
    });
  }










}
