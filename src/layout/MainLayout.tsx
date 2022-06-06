import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu, Message, Space } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft, IconFullscreen } from '@arco-design/web-react/icon';

import styles from './MainLayout.module.less';
import { fullScreen } from '@/utils/screen';
import Avatar from './components/Avatar';

const { Item: MenuItem, SubMenu } = Menu;
const { Sider, Header, Content } = Layout;

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    function handleCollapsed() {
        setCollapsed(!collapsed);
    }

    return (
        <Layout className={styles.container}>
            <Sider
                collapsed={collapsed}
                onCollapse={handleCollapsed}
                collapsible
                trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
                breakpoint="xl"
            >
                <div>LOGO</div>
                {/* TODO: menu */}
                <Menu
                    defaultOpenKeys={['1']}
                    defaultSelectedKeys={['0_3']}
                    onClickMenuItem={(key) => Message.info({ content: `You select ${key}`, showIcon: true })}
                    style={{ width: '100%' }}
                >
                    <MenuItem key="0_1" disabled>
                        <IconHome />
                        Menu 1
                    </MenuItem>
                    <MenuItem key="0_2">
                        <IconCalendar />
                        Menu 2
                    </MenuItem>
                    <MenuItem key="0_3">
                        <IconCalendar />
                        Menu 3
                    </MenuItem>
                    <SubMenu
                        key="1"
                        title={
                            <span>
                                <IconCalendar />
                                Navigation 1
                            </span>
                        }
                    >
                        <MenuItem key="1_1">Menu 1</MenuItem>
                        <MenuItem key="1_2">Menu 2</MenuItem>
                        <SubMenu key="2" title="Navigation 2">
                            <MenuItem key="2_1">Menu 1</MenuItem>
                            <MenuItem key="2_2">Menu 2</MenuItem>
                        </SubMenu>
                        <SubMenu key="3" title="Navigation 3">
                            <MenuItem key="3_1">Menu 1</MenuItem>
                            <MenuItem key="3_2">Menu 2</MenuItem>
                            <MenuItem key="3_3">Menu 3</MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="4"
                        title={
                            <span>
                                <IconCalendar />
                                Navigation 4
                            </span>
                        }
                    >
                        <MenuItem key="4_1">Menu 1</MenuItem>
                        <MenuItem key="4_2">Menu 2</MenuItem>
                        <MenuItem key="4_3">Menu 3</MenuItem>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header className={styles.header}>
                    <div className={styles.pageTitle}>Dashboard</div>

                    <Space className={styles.rightTools} size="large">
                        <IconFullscreen className={styles.fullScreen} onClick={() => fullScreen(document.documentElement)} />
                        <Avatar />
                    </Space>
                </Header>
                <Layout style={{ padding: '0 24px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
