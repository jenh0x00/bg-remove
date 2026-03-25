'use client';

interface ResultViewProps {
  resultUrl: string;
  originalUrl: string;
  onDownload: () => void;
}

export default function ResultView({ resultUrl, originalUrl, onDownload }: ResultViewProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Original */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            {/* Checkered background to show transparency */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #ccc 25%, transparent 25%),
                  linear-gradient(-45deg, #ccc 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #ccc 75%),
                  linear-gradient(-45deg, transparent 75%, #ccc 75%)
                `,
                backgroundSize: '16px 16px',
                backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
              }}
            />
            <img
              src={originalUrl}
              alt="Original"
              className="relative max-h-64 rounded-lg shadow-md"
            />
          </div>
          <span className="text-xs text-gray-500 font-medium">Original</span>
        </div>

        {/* Arrow */}
        <div className="text-gray-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Result */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            {/* Checkered background */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #ccc 25%, transparent 25%),
                  linear-gradient(-45deg, #ccc 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #ccc 75%),
                  linear-gradient(-45deg, transparent 75%, #ccc 75%)
                `,
                backgroundSize: '16px 16px',
                backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
              }}
            />
            <img
              src={resultUrl}
              alt="Background Removed"
              className="relative max-h-64 rounded-lg shadow-md"
            />
          </div>
          <span className="text-xs text-gray-500 font-medium">Background Removed</span>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={onDownload}
        className="mt-4 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download Image
      </button>
    </div>
  );
}
