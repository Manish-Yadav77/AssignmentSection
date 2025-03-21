import React from 'react';

function PreviewModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-lg p-4 rounded-lg z-50">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Preview</h2>
        <button onClick={onClose} className="text-red-500">Close</button>
      </div>
      <pre className="mt-2">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default PreviewModal;