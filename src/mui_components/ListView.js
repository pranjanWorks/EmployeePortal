import { List, ListItem } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";

const ListView = ({ items }) => {
    const listItems = items.map(item => {
        return (
            <InfoCard item={item} />
        );
    });
    
    return (
        <List sx={{maxWidth: 360}} dense>
            {listItems}
        </List>
    );
};

export default ListView;