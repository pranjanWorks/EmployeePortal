import React from "react";

const ListView = (props) => {
    const listItems = props.items.map((item) => {
        return (
            <li key={item.email} onClick={() => props.onClickHandler(item)} style={{cursor: "pointer"}}>{item.name}</li>
        );
    });

    return (
        <div style={{width: "800px",marginLeft: "8px", border: "2px solid #000", boxSizing: "border-box", padding: "4px"}}>
            <h2>{props.title}</h2>
            <ol>{listItems}</ol>
        </div>
    );
};

export default ListView;