'use client';

type ProcessingStatus = 'idle' | 'uploading' | 'processing' | 'success' | 'error';

interface ProcessingStatusProps {
  status: ProcessingStatus;
  error?: string;
  onRetry?: () => void;
}

export default function ProcessingStatus({ status, error, onRetry }: ProcessingStatusProps) {
  if (status === 'idle') return null;

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {status === 'uploading' && (
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-gray-600">Uploading image...</p>
        </div>
      )}

      {status === 'processing' && (
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-gray-600">Removing background...</p>
          <p className="text-sm text-gray-400">This usually takes 2-3 seconds</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-red-600">Processing failed</p>
            <p className="text-sm text-gray-500 mt-1">{error || 'Something went wrong'}</p>
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 px-4 py-2 text-sm text-blue-500 hover:text-blue-600 font-medium"
            >
              Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
