import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
