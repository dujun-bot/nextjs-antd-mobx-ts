import { AppProps } from 'next/app';
import AppLayout from 'components/layout/appLayout';

require('styles/globals.less');

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default App;
