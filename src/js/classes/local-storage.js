export default class LocalStorage {
  constructor() {
    this.STORAGE_PROPERTY_NAME = 'userBooks';
  }
// повертає масив об'єктів книг
  getBooks() {
    const savedBooks = localStorage.getItem(this.STORAGE_PROPERTY_NAME);
    try {
      return JSON.parse(savedBooks);
    } catch (error) {
      console.log(error.name);
    }
  }
// приймає об'єкт книги і додає його до масиву що вже є
  addBook(newBook) {
    const savedBooks = this.getBooks();
    savedBooks.push(newBook);
    try {
      localStorage.setItem(
        this.STORAGE_PROPERTY_NAME,
        JSON.stringify(savedBooks)
      );
    } catch (error) {
      console.log(error.name);
    }
  }
// приймає ід книги і зберігає новий масив вже без цієї книги
  deleteBookById(bookId) {
    const savedBooks = this.getBooks();
    const neededBooks = savedBooks.filter(({ _id }) => _id !== bookId);
    try {
      localStorage.setItem(
        this.STORAGE_PROPERTY_NAME,
        JSON.stringify(neededBooks)
      );
    } catch (error) {
      console.log(error.name);
    }
  }
// перевіряє чи у сховищі поле для збереження книг, якщо ні то створює
  init() {
    const savedBooks = this.getBooks();
    if (!savedBooks)
      localStorage.setItem(this.STORAGE_PROPERTY_NAME, JSON.stringify([]));
  }
}
