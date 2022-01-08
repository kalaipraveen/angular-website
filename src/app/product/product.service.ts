import { Injectable } from '@angular/core';
export interface Product {
  // Unique Id
  id: string;
  // Ref on category belongs to
  categoryId: string;
  // The title
  title: string;
  // Price
  price: number;
  // Mark product with specialproce
  isSpecial: boolean;
  // Description
  desc: string;
  // Path to small image
  imageS: string;
  // Path to large image
  imageL: string;
}

@Injectable()
export class ProductService {
  private products: Product[] = [
    // Bakery
    {
      id: '1',
      categoryId: '1',
      title: 'Baguette/French Bread',
      price: 1.5,
      isSpecial: false,
      imageL: '../../assets/Images/BaguetteFrench BreadL.jpg',
      imageS: '../../assets/Images/BaguetteFrench BreadS.jpg',
      desc: 'Great eaten fresh from oven. Used tomake sub sandwiches, etc.',
    },
    {
      id: '2',
      categoryId: '1',
      title: 'Croissants',
      price: 0.5,
      isSpecial: true,
      imageL: '../../assets/Images/CroissantsL.jpg',
      imageS: '../../assets/Images/CroissantS.jpg',
      desc: 'A croissant is a buttery, flaky,viennoiserie- pastry named for its well- known crescent shape.',
    },
    // Takeaway
    {
      id: '3',
      categoryId: '2',
      title: 'Pizza',
      price: 1.2,
      isSpecial: false,
      imageL: '../../assets/Images/PizzaL.jpg',
      imageS: '../../assets/Images/Pizza.jpg',
      desc: 'Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.',
    },
    // Dairy
    {
      id: '4',
      categoryId: '3',
      title: 'Milk',
      price: 1.7,
      isSpecial: false,
      imageL: '../../assets/Images/MilkL.jpg',
      imageS: '../../assets/Images/milkS.jpg',
      desc: 'Milk is a pale liquid produced by the mammary glands of mammals',
    },
    {
      id: '5',
      categoryId: '3',
      title: 'Cream Cheese',
      price: 2.35,
      isSpecial: false,
      imageL: '../../assets/Images/Cream CheeseL.jpg',
      imageS: '../../assets/Images/Cream CheeseS.jpg',
      desc: 'Cream cheese is a soft, mild-tasting fresh cheese with a high fat content.',
    },
    // Meat
    {
      id: '6',
      categoryId: '4',
      title: 'Pork Tenderloin',
      price: 5.6,
      isSpecial: false,
      imageL: '../../assets/Images/Pork TenderloinL.jpg',
      imageS: '../../assets/Images/Pork TenderloinS.jpg',
      desc: 'The pork tenderloin, in somecountries called pork fillet, is a cut of pork. ',
    },
    {
      id: '7',
      categoryId: '4',
      title: 'Ribs, Baby Back',
      price: 4.85,
      isSpecial: false,
      imageL: '../../assets/Images/Ribs, Baby BackL.jpg',
      imageS: '../../assets/Images/Ribs, Baby BackS.jpg',
      desc: 'Pork ribs are a cut of pork popularin North American and Asian cuisines. ',
    },
    {
      id: '8',
      categoryId: '4',
      title: 'Ground Beef',
      price: 9.2,
      isSpecial: false,
      imageL: '../../assets/Images/groundbeefL.jpg',
      imageS: '../../assets/Images/groundbeefS.jpg',
      desc: 'Ground beef, beef mince, minced beef,minced meat is a ground meat made of beef that has been finely chopped witha large knife or a meat grinder.',
    },
    // Seafood
    {
      id: '9',
      categoryId: '5',
      title: 'Tuna',
      price: 3.45,
      isSpecial: false,
      imageL: '../../assets/Images/TunaL.jpg',
      imageS: '../../assets/Images/TunaS.jpg',
      desc: 'A tuna is a saltwater finfish that belongs to the tribe Thunnini, a sub- grouping of the mackerel family - which together with the tunas, also includes the bonitos, ackerels, andSpanish mackerels.',
    },
    {
      id: '10',
      categoryId: '5',
      title: 'Salmon',
      price: 4.55,
      isSpecial: false,
      imageL: '../../assets/Images/SalmonL.jpg',
      imageS: '../../assets/Images/SalmonS.jpg',
      desc: 'Salmon is the common name for severalspecies of ray- finned fish in the family Salmonidae.',
    },
    {
      id: '11',
      categoryId: '5',
      title: 'Oysters',
      price: 7.8,
      isSpecial: false,
      imageL: '../../assets/Images/OystersL.jpg',
      imageS: '../../assets/Images/OystersS.jpg',
      desc: 'The word oyster is used as a common name for a number of different families of saltwater clams, bivalvemolluscs that live in marine or brackish habitats.',
    },
    {
      id: '12',
      categoryId: '5',
      title: 'Scalops',
      price: 2.7,
      isSpecial: false,
      imageL: '../../assets/Images/ScalopsL.jpg',
      imageS: '../../assets/Images/ScalopsS.jpg',
      desc: 'Scallop is a common name that is primarily applied to any one of numerous species of saltwater clams ormarine bivalve mollusks in the taxonomic family Pectinidae, the scallops.',
    },
    // Fruit & Veg
    {
      id: '13',
      categoryId: '6',
      title: 'Banana',
      price: 1.55,
      isSpecial: false,
      imageL: '../../assets/Images/bananaL.jpg',
      imageS: '../../assets/Images/bananaS.jpg',
      desc: 'The banana is an edible fruit,botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.',
    },
    {
      id: '14',
      categoryId: '6',
      title: 'Cucumber',
      price: 1.05,
      isSpecial: false,
      imageL: '../../assets/Images/CucumberL.jpg',
      imageS: '../../assets/Images/CucumberS.jpg',
      desc: 'Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. ',
    },
    {
      id: '15',
      categoryId: '6',
      title: 'Apple',
      price: 0.8,
      isSpecial: false,
      imageL: '../../assets/Images/AppleL.jpg',
      imageS: '../../assets/Images/AppleS.jpg',
      desc: 'The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple.',
    },
    {
      id: '16',
      categoryId: '6',
      title: 'Lemon',
      price: 3.2,
      isSpecial: false,
      imageL: '../../assets/Images/LemonL.jpg',
      imageS: '../../assets/Images/LemonS.jpg',
      desc: 'The lemon is a species of small evergreen tree native to Asia.',
    },
    {
      id: '17',
      categoryId: '6',
      title: 'Pear',
      price: 4.25,
      isSpecial: false,
      imageL: '../../assets/Images/PearL.jpg',
      imageS: '../../assets/Images/PearS.jpg',
      desc: 'The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae.',
    },
  ];
  getProducts(category?: string, search?: string) {
    if (category) {
      return this.products.filter(
        (product: Product, index: number, array: Product[]) => {
          return product.categoryId === category;
        }
      );
    } else if (search) {
      let lowSearch = search.toLowerCase();
      return this.products.filter(
        (product: Product, index: number, array: Product[]) => {
          return product.title.toLowerCase().indexOf(lowSearch) != -1;
        }
      );
    } else {
      return this.products;
    }
  }
  getProduct(id: string): Product {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
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
