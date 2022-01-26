import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import FlappyPage from './Component/FlappyPage';
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <FlappyPage />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
