import React, { useState } from 'react';
import CopyButton from './CopyButton';

const InputCopyDemo = () => {
  const [inputValue, setInputValue] = useState('');

  const handleCopy = () => {
    console.log('Input copied!');
  };

  return (
    <div className="demo">
      <h2>Copy Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <CopyButton text={inputValue} onCopy={handleCopy} />
    </div>
  );
};

export default InputCopyDemo;