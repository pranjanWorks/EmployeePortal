import { List, ListItem } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";

const ListView = ({ items, deleteHandler }) => {
    const listItems = items.map(item => {
        return (
            <InfoCard key={item.email} item={item} deleteHandler={deleteHandler} />
        );
    });
    
    return (
        <List sx={{overflow: 'auto', padding: 1}}>
            {listItems}
        </List>
    );
};

export default ListView;