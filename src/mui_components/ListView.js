import { List, ListItem } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";

const ListView = ({ items }) => {
    const listItems = items.map(item => {
        return (
            <InfoCard key={item.email} item={item} />
        );
    });
    
    return (
        <List>
            {listItems}
        </List>
    );
};

export default ListView;