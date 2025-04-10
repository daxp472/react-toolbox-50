import React from 'react';
import CopyButton from './CopyButton';

const EmailCopyDemo = () => {
  const email = 'example@email.com';

  const handleCopy = () => {
    console.log('Email copied!');
  };

  return (
    <div className="demo">
      <h2>Copy Email</h2>
      <p>{email}</p>
      <CopyButton text={email} onCopy={handleCopy} />
    </div>
  );
};

export default EmailCopyDemo;