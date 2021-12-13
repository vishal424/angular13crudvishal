import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    const data = {
      title: this.product.title,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProduct(): void {
    this.submitted = true;
    this.product = {
      title: '',
      description: '',
      published: false
    };
  }

}
