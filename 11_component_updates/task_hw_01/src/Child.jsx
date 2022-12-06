import React, { Component } from 'react';

const Child = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return <>{children}</>;
};

export default Child;
