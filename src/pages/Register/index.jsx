import { Button, Checkbox, Form, Input } from 'antd';

function Register() {
    const [form] = Form.useForm();

    async function finishSubmitHandler() {
        const formValues = form.getFieldsValue();
        const graphqlQuery = {
            query: `
                mutation CreateNewUser($email: String!, $name: String!, $password: String!) {
                    createUser(userInput: {email: $email, name: $name, password: $password}) {
                        _id,
                        email
                    }
                }
            `,
            variables: {
                email: formValues.email,
                name: formValues.name,
                password: formValues.password,
            },
        };

        fetch(process.env.REACT_APP_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => res.json())
            .then((resData) => {
                console.log(resData);
            })
            .catch((err) => {
                console.log(`[App Error]: ${err}`);
            });
    }

    function failedSubmitHandler() {}

    return (
        <div className="register-page">
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={finishSubmitHandler}
                onFinishFailed={failedSubmitHandler}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input autoComplete="email" />
                </Form.Item>

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input autoComplete="username" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password autoComplete="current-password" />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Register;
