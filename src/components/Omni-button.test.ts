import React from 'react';
import ReactDOM from 'react-dom';
import App from './Omni-button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OmniButton label="Click me" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
