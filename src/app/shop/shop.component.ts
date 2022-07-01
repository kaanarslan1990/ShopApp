import { Component } from "@angular/core";
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styles: [`
    .pt-100 {padding-top:100px;}`]
})

export class ShopComponent {
    public selectedCategory: Category = null!;
    public productsPerPage = 3;
    public selectedPage = 1;

    

    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository) {}

        get products(): Product[] {
            let index = (this.selectedPage-1) * this.productsPerPage;
            return this.productRepository
                    .getProducts(this.selectedCategory)
                    .slice(index, index + this.productsPerPage);
        }

        get categories(): Category[] {
            return this.categoryRepository.getCategories();
        }

        changeCategory(newCategory?: Category ) {
            this.selectedCategory = newCategory!;
        }
    
}