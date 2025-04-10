import React from 'react';
import CopyButton from './CopyButton';
import useCopy from '../hooks/useCopy';

const FeedbackCopyDemo = () => {
  const textToCopy = 'Secret code: 12345';
  const { copied, handleCopy } = useCopy();

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