import React from 'react';
import Form from '../components/form/form';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export const App = () => {
  return (
    <div className="app">
      <Form />
    </div>
  );
};

export default App;
