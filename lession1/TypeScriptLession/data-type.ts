//------------------- Data type-----------------------------

interface Author {
  name: string;
}

enum Language {
  ENGLISH = 'english',
  VIETNAMESE = 'vietnamese'
}

interface Book {
  name: string;
  pages: number;
  authors: Author[];
  inStock: boolean;
  category: 'Friction' | 'Horror' | 'Science';
  years?: number;
  getInformation: Function;
  getBasicInformation: () => void;
  getPrice: () => number;
  language: Language;
}

const books: Book[] = [
  {
    name: 'Harry Potter',
    pages: 20,
    authors: [
      {
        name: 'J.K Rowling'
      }
    ],
    inStock: true,
    category: 'Friction',
    language: Language.ENGLISH,
    getInformation: function () {
      console.table({
        name: this.name,
        pages: this.pages,
        author: this.authors[0].name,
        category: this.category,
        language: this.language
      });
    },
    getBasicInformation: function () {
      return this.name + this.authors[0];
    },
    getPrice: function () {
      return 200;
    }
  }
];

books[0].getInformation();
