import { trackEvent } from './analytics';

export const downloadDocument = async (documentId: string, title: string) => {
  try {
    // Track the download attempt
    trackEvent('document_download_start', {
      document_id: documentId,
      document_title: title
    });

    // Fetch the document
    const response = await fetch(`/api/documents/${documentId}`);
    
    if (!response.ok) {
      throw new Error('Document download failed');
    }

    // Get the blob
    const blob = await response.blob();
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Track successful download
    trackEvent('document_download_complete', {
      document_id: documentId,
      document_title: title
    });
  } catch (error) {
    console.error('Download failed:', error);
    
    // Track failed download
    trackEvent('document_download_error', {
      document_id: documentId,
      document_title: title,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    // Show error to user
    alert('Sorry, the document could not be downloaded. Please try again later.');
  }
};