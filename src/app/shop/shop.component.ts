import { Component } from "@angular/core";
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.respository";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styles: [`
    .pt-100 {padding-top:100px;}`]
})

export class ShopComponent {
    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository) {}

        get products(): Product[] {
            return this.productRepository.getProducts();
        }

        get categories(): Category[] {
            return this.categoryRepository.getCategories();
        }
    
}