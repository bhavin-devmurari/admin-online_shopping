import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // <Provider store={store}>
  // <PersistGate loading={null} persistor={persistor}>
  // <BrowserRouter>
  <App />,
  // </BrowserRouter>
  // </PersistGate>
  // </Provider>,

  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
