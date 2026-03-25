// remove.bg API integration
// Docs: https://www.remove.bg/api

const REMOVE_BG_API_URL = 'https://api.remove.bg/v1.0/removebg';

export interface RemoveBgError {
  code: string;
  detail: string;
}

export async function removeBackgroundFromImage(
  imageData: Buffer | Uint8Array,
  apiKey: string
): Promise<string> {
  const formData = new FormData();
  
  // Convert to a plain ArrayBuffer that Blob accepts
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blobData = Buffer.isBuffer(imageData)
    ? imageData
    : Buffer.from(imageData);
    
  formData.append('image_file', new Blob([blobData as any]), 'image.png');
  formData.append('size', 'auto');
  formData.append('format', 'png');

  const response = await fetch(REMOVE_BG_API_URL, {
    method: 'POST',
    headers: {
      'X-Api-Key': apiKey,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.errors?.[0]?.detail || `API error: ${response.status}`
    );
  }

  const data = await response.json();

  if (data.errors && data.errors.length > 0) {
    throw new Error(data.errors[0].detail);
  }

  // Return base64 result for immediate display
  return data.data.result_base64;
}
