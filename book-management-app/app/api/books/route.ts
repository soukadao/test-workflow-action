import { NextRequest, NextResponse } from 'next/server';
import { bookStore } from '@/lib/bookStore';

export async function GET() {
  const books = bookStore.getAll();
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  try {
    const bookData = await request.json();
    
    // Basic validation
    if (!bookData.title || !bookData.author) {
      return NextResponse.json(
        { error: 'タイトルと著者は必須です' },
        { status: 400 }
      );
    }

    const newBook = bookStore.create(bookData);
    return NextResponse.json(newBook, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: '本の作成に失敗しました' },
      { status: 500 }
    );
  }
}
