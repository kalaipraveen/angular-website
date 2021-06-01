import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';



export interface Category {
    // Unique Id
    id: string;
    // The title
    title: string;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}
@Injectable()
export class CategoryService {
    categories: Category[] = [
        {
            id: '1', title: 'Bread & Bakery', imageL: '../../assets/Images/breadandbakeryL.jpg',
            imageS: '../../assets/Images/breadandbakeryS.jpg',
            desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread,biscotti, muffins, bagels, fresh coffee and more.'
        },
        {
            id: '2', title: 'Takeaway', imageL: '../../assets/Images/takeawayL.jpg', imageS: '../../assets/Images/takeawayS.jpg',
            desc: "'It's consistently excellent, dishes are superb and healthily cookedwith high quality ingredients.'"
        },
        {
            id: '3', title: 'Dairy', imageL: '../../assets/Images/diaryL.jpg',
            imageS: '../../assets/Images/diaryS.jpg',
            desc: 'A dairy product is foodproduced from the milk of mammals, primarily cows, water buffaloes, goats,sheep, yaks, horses.'
        },
        {
            id: '4', title: 'Meat', imageL: "../../assets/Images/meatLarge.jpg",
            imageS: '../../assets/Images/MeatS.jpg', desc: 'Only superior quality beef, lamb, and pork.'
        },
        {
            id: '5', title: 'Seafood', imageL:
                '../../assets/Images/seafoodL.jpg', imageS: '../../assets/Images/seafoodS.jpg',
            desc: 'Great place to buy fresh seafood.'
        },
        {
            id: '6', title: 'Fruit & Veg', imageL: '../../assets/Images/fruitL.jpg', imageS: '../../assets/Images/fruitS.jpg',
            desc: 'A variety of fresh fruits and vegetables.'
        }

    ];

    getCategories() {
        return this.categories;
    }
    getCategory(id: string): Category {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        throw new ProductNotFoundException(`Product ${id} not found`);
    }

}
export class ProductNotFoundException extends Error {
    constructor(message?: string) {
   super(message);
    }
   }