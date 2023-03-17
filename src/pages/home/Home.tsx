import React, { FC } from "react";
import { CampaignList } from "../../components/CampaignList/CampaignList";

export const Home: FC = () => {
    return (
        <>
            <h1 style={{ color: "#fff" }}>Campaigns List</h1>
            <CampaignList />
        </>
    );
};
