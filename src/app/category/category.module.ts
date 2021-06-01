import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryCardComponent } from './category-card.component';
import { CategorySlideComponent } from './category-slide.component';
import {CategoryService} from './category.service';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CategoryCardComponent,CategorySlideComponent],
    exports: [CategoryCardComponent, CategorySlideComponent],
    providers: [CategoryService]
    
})
export class CategoryModule { }