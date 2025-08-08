"use client";

import { useEffect, useState, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist';
import { PDFDocumentProxy } from 'pdfjs-dist';

// Set worker path for PDF.js
const pdfjsVersion = '3.4.120'; // Make sure this matches your installed version
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.5);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load the PDF document
  useEffect(() => {
    async function loadPdf() {
      try {
        setIsLoading(true);
        const loadingTask = pdfjs.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        
        setPdfDoc(pdf);
        setTotalPages(pdf.numPages);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load the PDF document. Please try again later.');
        setIsLoading(false);
      }
    }
    
    loadPdf();
    
    return () => {
      // Cleanup if needed
      if (pdfDoc) {
        pdfDoc.destroy();
      }
    };
  }, [pdfUrl]);

  // Render the current page whenever it changes
  useEffect(() => {
    async function renderPage() {
      if (!pdfDoc || !canvasRef.current) return;
      
      try {
        const page = await pdfDoc.getPage(currentPage);
        const viewport = page.getViewport({ scale });
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        if (!context) return;
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
          canvasContext: context,
          viewport
        };
        
        await page.render(renderContext).promise;
      } catch (err) {
        console.error('Error rendering page:', err);
        setError('Failed to render the current page.');
      }
    }
    
    renderPage();
  }, [pdfDoc, currentPage, scale]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleZoomIn = () => {
    setScale(prevScale => prevScale + 0.25);
  };

  const handleZoomOut = () => {
    if (scale > 0.5) {
      setScale(prevScale => prevScale - 0.25);
    }
  };

  const handleDownload = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* PDF Controls */}
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
              className={`p-2 rounded ${
                currentPage <= 1 ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
              className={`p-2 rounded ${
                currentPage >= totalPages ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleZoomOut}
              className="p-2 rounded text-gray-700 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="text-sm font-medium">
              {Math.round(scale * 100)}%
            </div>
            <button
              onClick={handleZoomIn}
              className="p-2 rounded text-gray-700 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              onClick={handleDownload}
              className="ml-4 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Download PDF
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="overflow-auto flex justify-center p-4 bg-gray-50 min-h-[600px]">
          <canvas ref={canvasRef} className="shadow-lg"></canvas>
        </div>
      </div>
    </div>
  );
}