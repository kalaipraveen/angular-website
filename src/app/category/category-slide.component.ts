import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from './category.service';

@Component({
    selector: 'db-category-slide',
    templateUrl: './category-slide.component.html'
}) 
export class CategorySlideComponent {
    @Input() category: Category;
    @Output() select: EventEmitter<Category> =
        new EventEmitter<Category>();
    onSelect() {
        this.select.emit(this.category);
    }
}


 