const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

console.log(book1);

const { title: tbook, author: tauthor, libraryID: bookID } = book1;
console.log('The title of the book is ' + tbook + ', ' + 'the author is ' + tauthor + ', ' + 'and the library id is ' + bookID);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const { title: tbook2, author: tauthor2, libraryID: bookID2 } = book2;
console.log('The title of the book is ' + tbook2 + ', ' + 'the author is ' + tauthor2 + ', ' + 'and the library id is ' + bookID2);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3, book4, book5] = library;
console.log('book3', book3);
console.log('book4', book4);
console.log('book5', book5);

const [, , , book6] = library;
console.log('book6', book6);
