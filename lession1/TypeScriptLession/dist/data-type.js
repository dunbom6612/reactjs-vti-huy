"use strict";
//------------------- Data type-----------------------------
var Language;
(function (Language) {
    Language["ENGLISH"] = "english";
    Language["VIETNAMESE"] = "vietnamese";
})(Language || (Language = {}));
const books = [
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
