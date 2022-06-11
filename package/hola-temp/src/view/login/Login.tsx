import { Button, Form, Input, Message } from '@arco-design/web-react';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Login.module.less';

const FormItem = Form.Item;

interface IFormData {
    username: string;
    password: string;
}

export default function Login() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    function onSubmit(values: IFormData): void {
        const redirectUrl = searchParams.get('redirect') || '/';
        switch (values.username) {
            case 'admin':
                navigate(redirectUrl);
                break;
            case 'editor':
                navigate(redirectUrl);
                break;
            default:
                Message.error('使用 admin / editor 登录，不验证密码');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div>login From</div>
                <Form<IFormData> onSubmit={onSubmit} initialValues={{ username: 'admin', password: '123' }}>
                    <FormItem field="username">
                        <Input prefix={<IconUser />} placeholder="please enter your username..." />
                    </FormItem>
                    <FormItem field="password">
                        <Input.Password prefix={<IconLock />} placeholder="please enter your password..." />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" long htmlType="submit">
                            Login
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    );
}
