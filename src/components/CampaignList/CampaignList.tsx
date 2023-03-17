import React, { useEffect, useState } from "react";
import { List } from "antd";
import "./campaignList.css";
import { CampaignListItem } from "./CampaignListItem/CampaignListItem";
import { axios } from "../../api/axoisInstance";

export interface Compaign {
    id: number;
    name: string;
    description: string;
    goal_amount: number;
    status: "active" | "fraud" | "successfull";
}

export const CampaignList: React.FC = () => {
    const [initLoading, setInitLoading] = useState(false);
    const [list, setList] = useState<Compaign[]>([]);

    const getCampaigns = async () => {
        try {
            const { data: campaigns } = await axios.get<Compaign[]>(
                "/campaigns"
            );
            setList(campaigns.filter((item) => item.status === "active"));
            setInitLoading(false);
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getCampaigns();
    }, []);

    return (
        <div className="campaign-list-wrapper">
            <div className="campaign-list-sub-wrapper">
                <List
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="vertical"
                    dataSource={list}
                    renderItem={(item) => <CampaignListItem item={item} />}
                />
            </div>
        </div>
    );
};
