'use client';

import { useState, useEffect } from 'react';
import { Book, BookFormData } from '@/types/book';
import BookCard from '@/components/BookCard';
import BookForm from '@/components/BookForm';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('本の取得に失敗しました:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddBook = async (bookData: BookFormData) => {
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        await fetchBooks();
        setShowForm(false);
      }
    } catch (error) {
      console.error('本の追加に失敗しました:', error);
    }
  };

  const handleUpdateBook = async (bookData: BookFormData) => {
    if (!editingBook) return;

    try {
      const response = await fetch(`/api/books/${editingBook.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        await fetchBooks();
        setEditingBook(undefined);
        setShowForm(false);
      }
    } catch (error) {
      console.error('本の更新に失敗しました:', error);
    }
  };

  const handleDeleteBook = async (id: string) => {
    if (!confirm('本当に削除しますか？')) return;

    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchBooks();
      }
    } catch (error) {
      console.error('本の削除に失敗しました:', error);
    }
  };

  const handleEdit = (book: Book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBook(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">本管理アプリ</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            {showForm ? 'キャンセル' : '新しい本を追加'}
          </button>
        </div>

        {showForm && (
          <div className="mb-8">
            <BookForm
              book={editingBook}
              onSubmit={editingBook ? handleUpdateBook : handleAddBook}
              onCancel={handleCancel}
            />
          </div>
        )}

        {loading ? (
          <p className="text-gray-600">読み込み中...</p>
        ) : books.length === 0 ? (
          <p className="text-gray-600">本が登録されていません。上のボタンから追加してください。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onEdit={handleEdit}
                onDelete={handleDeleteBook}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
