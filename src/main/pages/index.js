import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
  }, []);
  return <div>Main</div>;
};

export default Main;
