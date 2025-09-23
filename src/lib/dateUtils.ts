/**
 * Utility functions for date formatting in terminal displays
 */

export const getCurrentDate = (): string => {
  const now = new Date();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const day = now.getDate().toString().padStart(2, '0');
  const year = now.getFullYear();
  return `${month} ${day} ${year}`;
};

export const getCurrentTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

export const getCurrentDateTime = (): string => {
  const now = new Date();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const day = now.getDate().toString().padStart(2, '0');
  const time = now.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  return `${month} ${day} ${time}`;
};

export const getFileDate = (): string => {
  const now = new Date();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const day = now.getDate().toString().padStart(2, '0');
  return `${month} ${day} ${now.getFullYear()}`;
};
