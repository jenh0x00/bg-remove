'use client';

import { useState, useCallback } from 'react';
import ImageUploader from '@/components/ImageUploader';
import ResultView from '@/components/ResultView';
import ProcessingStatus from '@/components/ProcessingStatus';

type ProcessingStatus = 'idle' | 'uploading' | 'processing' | 'success' | 'error';

export default function HomeClient() {
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [error, setError] = useState<string | undefined>();
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);

  const handleResult = useCallback((result: string, original: string) => {
    setResultUrl(result);
    setOriginalUrl(original);
  }, []);

  const handleStatusChange = useCallback((newStatus: ProcessingStatus, errorMsg?: string) => {
    setStatus(newStatus);
    setError(errorMsg);
    if (newStatus !== 'success') {
      setResultUrl(null);
      setOriginalUrl(null);
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (!resultUrl) return;

    // Create a temporary link to download the base64 image
    const link = document.createElement('a');
    link.href = resultUrl;
    link.download = 'background-removed.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [resultUrl]);

  const handleRetry = useCallback(() => {
    setStatus('idle');
    setError(undefined);
    setResultUrl(null);
    setOriginalUrl(null);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
      {/* Upload Area */}
      <ImageUploader
        onResult={handleResult}
        onStatusChange={handleStatusChange}
      />

      {/* Processing Status */}
      {(status === 'uploading' || status === 'processing') && (
        <ProcessingStatus status={status} />
      )}

      {/* Error State */}
      {status === 'error' && (
        <ProcessingStatus status="error" error={error} onRetry={handleRetry} />
      )}

      {/* Result */}
      {status === 'success' && resultUrl && originalUrl && (
        <ResultView
          resultUrl={resultUrl}
          originalUrl={originalUrl}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
}
