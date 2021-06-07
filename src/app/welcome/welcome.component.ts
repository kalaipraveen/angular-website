import { Component, Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from '../category/category.service'


@Component({
    selector: 'db-welcome',
    templateUrl: './welcome.component.html',
    styleUrls:['./welcome.component.css']
})
@Injectable()
export class WelcomeComponent {
    slideCategories: Category[];
    cardCategories: Category[];
    constructor(private router: Router,
        private categoryService: CategoryService) {
        this.slideCategories = this.categoryService.getCategories();
        this.cardCategories = this.categoryService.getCategories();
    }

}
