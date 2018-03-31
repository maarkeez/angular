import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
	selector: "store",
	moduleId: module.id,
	templateUrl: "store.component.html"
})

export class StoreComponent {

	//Products filter
	public selectedCategory = null;

	//Pagination
	public productsPerPage = 4;
	public selectedPage = 1;

	constructor(private repository: ProductRepository) { }

	get products(): Product[] {
		let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

		return this.repository.getProducts(this.selectedCategory)
		.slice(pageIndex, pageIndex + this.productsPerPage);
	}
	
	get categories(): string[] {
		return this.repository.getCategories();
	}

	changeCategory(newCategory?: string) {
		this.selectedCategory = newCategory;
	}

	changePage(newPage: number) {
		this.selectedPage = newPage;
	}

	changePageSize(newSize: number) {
		//'newSize' is passed by 'select.value' as String, so it needs to be parsed to Number.
		this.productsPerPage = Number(newSize);
		this.changePage(1);
	}

	get pageNumbers(): number[] {
		return Array(Math.ceil(this.repository
			.getProducts(this.selectedCategory).length / this.productsPerPage))
		.fill(0).map((x, i) => i + 1);
	}
}