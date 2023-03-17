import { List } from "antd";
import React, { FC, useState } from "react";
import { DonateModal } from "../../DonateModal/DonateModal";
import { Compaign } from "../CampaignList";

interface CampaignListItemProps {
    item: Compaign;
}

export const CampaignListItem: FC<CampaignListItemProps> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <List.Item
                style={{ cursor: "pointer" }}
                onClick={() => {
                    setIsModalOpen(true);
                }}
            >
                <List.Item.Meta
                    title={
                        <span
                            style={{
                                fontSize: "24px",
                            }}
                        >
                            {item.name}
                        </span>
                    }
                    description={
                        <p
                            style={{
                                fontSize: "16px",
                            }}
                        >
                            {item.description}
                        </p>
                    }
                    style={{ textAlign: "left" }}
                />
                <div className="info-wrapper">
                    <div>
                        <span className="info-title">Status: </span>
                        <span className="info-description">{item.status}</span>
                    </div>
                    <div>
                        <span className="info-title">Goal: </span>
                        <span className="info-description">
                            {item.goal_amount}&#36;
                        </span>
                    </div>
                </div>
            </List.Item>
            <DonateModal
                campaignId={item.id}
                title={item.name}
                isOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
            />
        </>
    );
};
