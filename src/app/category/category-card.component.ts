import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Category } from './category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'db-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;
  @Output() selected: EventEmitter<Category> = new EventEmitter<Category>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelect(category: Category) {
    this.selected.emit(this.category);
    // console.log(category);
    this.router.navigate(['products'], {
      queryParams: { category: category.id },
    });
  }
}
