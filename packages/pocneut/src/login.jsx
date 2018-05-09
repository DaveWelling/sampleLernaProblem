import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import LoginPage from './LoginPage';

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
      <LoginPage />
    </AppContainer>
  )
  , root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
