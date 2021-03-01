import { Layout } from 'antd';
import HeaderNavigator from './header/headerNavigator';
import styles from './appLayout.module.scss';

const { Content } = Layout;

const AppLayout = ({ children }) => (
    <Layout className={styles.appLayout}>
        <HeaderNavigator />
        <Content style={{ marginTop: 64 }} className={styles.contentPage}>
            {children}
        </Content>
    </Layout>
);

export default AppLayout;
