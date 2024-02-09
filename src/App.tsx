import React from 'react';
import { FirstComponent } from './components/first-component';
import { DisplayImages } from './components/image-display';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <FirstComponent />
      <DisplayImages />
    </div>
  );
}

export default App;
