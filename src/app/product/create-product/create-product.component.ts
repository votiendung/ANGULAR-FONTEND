import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = {};
  selectedImages: any = {};

  constructor(private productService: ProductService,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  createProduct() {
    this.productService.createNewProduct(this.product).subscribe(() => {
      console.log('Thành Công');
    }, () => {
      console.log('Xảy ra lỗi');
    });
  }
  // tslint:disable-next-line:typedef
  submit() {
    if (this.selectedImages !== null) {
      const filePath = `image/${this.selectedImages.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImages).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.product.image = url;
          });
        })
      ).subscribe();
    }
  }

  // tslint:disable-next-line:typedef
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImages = event.target.files;
    } else {
      this.selectedImages = [];
    }
  }

}
