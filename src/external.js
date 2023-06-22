import React, { useEffect } from 'react';

const ExternalRedirect = () => {
  useEffect(() => {
    window.location.replace('https://azure.microsoft.com/'); // Replace with your desired external URL
  }, []);

  return <div>Redirecting...</div>; // You can display a message while redirecting
};

export default ExternalRedirect;