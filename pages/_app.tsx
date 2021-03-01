import { AppProps } from 'next/app';
import AppLayout from 'components/layout/appLayout';

// import 'antd/dist/antd.css';
require('styles/globals.less');

const App = ({ Component, pageProps }: AppProps) => (
    <AppLayout>
        <Component {...pageProps} />
    </AppLayout>
);

export default App;
