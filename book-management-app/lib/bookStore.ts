import { Book } from '@/types/book';

// In-memory storage for books (in a real app, this would be a database)
const books: Book[] = [
  {
    id: '1',
    title: 'Next.js入門',
    author: '山田太郎',
    isbn: '978-4-1234-5678-9',
    publishedYear: 2024,
    description: 'Next.js 15の基本から応用まで学べる入門書',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    title: 'Reactプログラミング',
    author: '佐藤花子',
    isbn: '978-4-9876-5432-1',
    publishedYear: 2023,
    description: 'React 19の新機能を含む実践的なガイド',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
];

export const bookStore = {
  getAll: (): Book[] => {
    return [...books];
  },

  getById: (id: string): Book | undefined => {
    return books.find(book => book.id === id);
  },

  create: (bookData: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>): Book => {
    const now = new Date();
    const newBook: Book = {
      ...bookData,
      id: Date.now().toString(),
      createdAt: now,
      updatedAt: now,
    };
    books.push(newBook);
    return newBook;
  },

  update: (id: string, bookData: Partial<Omit<Book, 'id' | 'createdAt' | 'updatedAt'>>): Book | undefined => {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) return undefined;

    books[index] = {
      ...books[index],
      ...bookData,
      updatedAt: new Date(),
    };
    return books[index];
  },

  delete: (id: string): boolean => {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) return false;

    books.splice(index, 1);
    return true;
  },
};
