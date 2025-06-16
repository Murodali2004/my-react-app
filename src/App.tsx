import React from 'react';
import Message from './Message';

function App() {
  const myText = "Привет из пропса!";
  return (
    <div>
      <Message text={myText} />
    </div>
  );
}

export default App;