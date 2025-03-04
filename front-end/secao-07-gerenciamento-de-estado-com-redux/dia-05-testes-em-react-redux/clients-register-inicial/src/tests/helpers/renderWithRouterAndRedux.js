import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../../redux/reducers';

const renderWithRouterAndRedux = (
  component, // componente a ser renderizado
  {
    // estado inicial para o nosso reducer caso seja passado, caso contrário será undefined
    // e o reducer vai usar o estado inicial que ele já tem definido no código dele
    initialState,

    // caso você passe uma store por parâmetro ela será utilizada
    // caso contrário vai chamar a função createStore e criar uma nova
    store = createStore(rootReducer, initialState),

    // rota inicial da nossa aplicação
    initialEntries = ['/'],

    // caso você passe um history por parâmetro ele será utilizado
    // caso contrário vai chamar a função createMemotryHistory e criar um novo
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({ // arrow function que retorna um objeto

  // spread do retorno do render { getByTestId, getByRole, etc }
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),

  // history usado acima
  history,

  // store usada acima
  store,
});

export default renderWithRouterAndRedux;
