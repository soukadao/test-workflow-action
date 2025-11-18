export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookFormData = Omit<Book, 'id' | 'createdAt' | 'updatedAt'>;
