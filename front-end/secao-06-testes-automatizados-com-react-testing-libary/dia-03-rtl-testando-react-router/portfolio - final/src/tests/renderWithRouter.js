import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  
  // const returns = render(
  //   <Router history={ history }>
  //     {component}
  //   </Router>
  // );

  return ({
    ...render(<Router history={ history }> {component} </Router> ),
    history
  })
}

export default renderWithRouter;
