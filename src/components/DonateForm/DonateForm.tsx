import React, { FC } from "react";
import { Form, FormInstance, Input } from "antd";
import { FormValues } from "../DonateModal/DonateModal";

interface DonateFormProps {
    form: FormInstance<FormValues>;
    onFinish: (value: FormValues) => void;
}

export const DonateForm: FC<DonateFormProps> = ({ form, onFinish }) => {
    return (
        <Form
            form={form}
            name="donate"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Amount of money"
                name="amount"
                rules={[
                    { required: true, message: "Please input amount of money" },
                    {
                        pattern: /^[1-9][0-9]*$/,
                        message: "Donate should be more than zero",
                    },
                ]}
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item
                label="Nickname"
                name="nickname"
                rules={[
                    { required: true, message: "Please input your nickname!" },
                    {
                        min: 6,
                        message: "Nickname should be longer than 6 characters",
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
};
