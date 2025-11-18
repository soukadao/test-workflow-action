'use client';

import { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

export default function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{book.title}</h3>
      <p className="text-gray-700 mb-2">著者: {book.author}</p>
      {book.isbn && (
        <p className="text-sm text-gray-600 mb-1">ISBN: {book.isbn}</p>
      )}
      {book.publishedYear && (
        <p className="text-sm text-gray-600 mb-1">出版年: {book.publishedYear}</p>
      )}
      {book.description && (
        <p className="text-gray-600 mt-3 mb-4">{book.description}</p>
      )}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(book)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          編集
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          削除
        </button>
      </div>
    </div>
  );
}
