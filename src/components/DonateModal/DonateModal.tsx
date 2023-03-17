import { Form, Modal } from "antd";
import React, { FC } from "react";
import { axios } from "../../api/axoisInstance";
import { DonateForm } from "../DonateForm/DonateForm";

interface DonateModalProps {
    campaignId: number;
    title: string;
    isOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

export type FormValues = {
    amount: string;
    nickname: string;
};

export const DonateModal: FC<DonateModalProps> = ({
    title,
    isOpen,
    handleOk,
    handleCancel,
    campaignId,
}) => {
    const [form] = Form.useForm<FormValues>();

    const onFinish = (values: FormValues) => {
        axios.post("/donations/create", { ...values, campaignId });
        handleOk();
        form.resetFields();
    };

    return (
        <Modal
            title={`Donate to ${title}`}
            open={isOpen}
            onOk={() => {
                form.submit();
            }}
            onCancel={handleCancel}
            centered
        >
            <DonateForm form={form} onFinish={onFinish} />
        </Modal>
    );
};
