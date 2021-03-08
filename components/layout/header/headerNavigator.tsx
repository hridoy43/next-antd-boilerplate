import { PageHeader, Button } from 'antd';
import { LogoutOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import styles from './headerNavigator.module.scss';

const HeaderNavigator = () => (
    <PageHeader
        ghost={false}
        style={{ background: `var(--primary-color)` }}
        onBack={() => window.history.back()}
        backIcon={<ArrowLeftOutlined className={styles.headerIcon} />}
        extra={[
            <Button
                key={1}
                icon={<LogoutOutlined className={styles.headerIcon} />}
                shape="circle"
                size="large"
                type="link"
            />,
        ]}
        className={styles.headerWrapper}
    />
);
export default HeaderNavigator;
