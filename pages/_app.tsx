import { AppProps } from 'next/app';
import AppLayout from 'components/layout/appLayout';
import { Provider } from 'mobx-react';
import stores from 'store/index';
require('styles/globals.less');

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={stores}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

export default App;
