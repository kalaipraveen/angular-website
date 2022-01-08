import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from './product-card.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductGridComponent } from './product-grid.component';
import { CategoryModule } from '../category/category.module';
import { CategoryListComponent } from '../category/category-list.component';
import { ProductService } from './product.service';
import { ProductViewComponent } from './product-view.component';
import { CategoryTitlePipe } from '../category/category-pipe';
@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, CategoryModule],
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductSearchComponent,
    CategoryListComponent,
    ProductViewComponent,
    CategoryTitlePipe,
    ProductGridComponent,
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent,
    ProductSearchComponent,
    ProductViewComponent,
    CategoryTitlePipe,
    ProductGridComponent,
  ],
  providers: [ProductService],
})
export class ProductModule {}
