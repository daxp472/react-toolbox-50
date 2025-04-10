import React, { useState } from 'react';
import CopyButton from './CopyButton';

const FeedbackCopyDemo = () => {
  const textToCopy = 'Secret code: 12345';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="demo">
      <h2>Copy with Feedback</h2>
      <p>{textToCopy}</p>
      <CopyButton text={textToCopy} onCopy={handleCopy} />
      {copied && <span className="feedback">Copied!</span>}
    </div>
  );
};

export default FeedbackCopyDemo;