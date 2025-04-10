import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/CopyButton.css';

const CopyButton = ({ text, onCopy }) => {
  return (
    <CopyToClipboard text={text} onCopy={onCopy}>
      <button className="copy-btn">Copy</button>
    </CopyToClipboard>
  );
};

export default CopyButton;