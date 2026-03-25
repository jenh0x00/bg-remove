// remove.bg API integration
// Docs: https://www.remove.bg/api

const REMOVE_BG_API_URL = 'https://api.remove.bg/v1.0/removebg';

export async function removeBackgroundFromImage(
  imageData: Buffer | Uint8Array,
  apiKey: string
): Promise<string> {
  const formData = new FormData();

  // Convert Buffer/Uint8Array to Blob for FormData
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
    // Try to parse error response
    const errorText = await response.text().catch(() => '');
    let errorMessage = `API error: ${response.status}`;
    try {
      const errorData = JSON.parse(errorText);
      if (errorData.errors?.[0]?.detail) {
        errorMessage = errorData.errors[0].detail;
      }
    } catch {
      // Not JSON, use status text or generic message
    }
    throw new Error(errorMessage);
  }

  // remove.bg returns binary PNG data, convert to base64
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer.toString('base64');
}
