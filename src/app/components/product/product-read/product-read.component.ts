import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(id: number): void {
    this.ProductService.delete(id).subscribe(() => {
      this.ProductService.showMessage('Produto Excluído com Sucesso!')
      this.router.navigate(['/products'])
    } )
  }

}
