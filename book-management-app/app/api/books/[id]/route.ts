import { NextRequest, NextResponse } from 'next/server';
import { bookStore } from '@/lib/bookStore';

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  const { id } = await params;
  const book = bookStore.getById(id);

  if (!book) {
    return NextResponse.json(
      { error: '本が見つかりません' },
      { status: 404 }
    );
  }

  return NextResponse.json(book);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { id } = await params;
    const bookData = await request.json();

    const updatedBook = bookStore.update(id, bookData);

    if (!updatedBook) {
      return NextResponse.json(
        { error: '本が見つかりません' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBook);
  } catch {
    return NextResponse.json(
      { error: '本の更新に失敗しました' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  const { id } = await params;
  const success = bookStore.delete(id);

  if (!success) {
    return NextResponse.json(
      { error: '本が見つかりません' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
