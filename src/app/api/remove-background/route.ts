import { NextRequest, NextResponse } from 'next/server';
import { removeBackgroundFromImage } from '@/lib/remove-bg';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.REMOVE_BG_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Validate file size (12MB max for remove.bg)
    const maxSize = 12 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 12MB.' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload JPG, PNG, or WebP.' },
        { status: 400 }
      );
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Call remove.bg API
    const resultBase64 = await removeBackgroundFromImage(buffer, apiKey);

    return NextResponse.json({
      success: true,
      result: `data:image/png;base64,${resultBase64}`,
    });
  } catch (error) {
    console.error('Background removal error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to remove background' },
      { status: 500 }
    );
  }
}
