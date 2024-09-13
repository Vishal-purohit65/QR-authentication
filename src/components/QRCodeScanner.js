import React from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = () => {
  const handleScan = (result) => {
    if (result) {
      // Read the QR code data
      const qrData = result?.text || 'No data found';

      // Create a speech synthesis instance
      const utterance = new SpeechSynthesisUtterance(` ${qrData}`);
      
      // Set the properties for the speech
      utterance.lang = 'en-US'; // Language
      utterance.rate = 1; // Speed

      // Speak the data
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleError = (error) => {
    console.error('QR code scanning error:', error);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
        onResult={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QRCodeScanner;
