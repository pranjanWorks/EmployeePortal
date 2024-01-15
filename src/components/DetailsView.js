import React from "react";

const DetailsView = (props) => {
    const { name, email, department, primaryNo, ext } = props.item;
    return (
        <div style={{width: "800px", marginLeft: "8px", marginTop: "20px", border: "2px solid #000", boxSizing: "border-box", padding: "4px"}}>
            <h3>{props.title}</h3>
            <ul>
                <li><strong>Name: </strong>{name}</li>
                <li><strong>Email: </strong>{email}</li>
                <li><strong>Department: </strong>{department}</li>
                <li><strong>Primary Number: </strong>{primaryNo}</li>
                <li><strong>Ext: </strong>{ext}</li>
            </ul>
        </div>
    );
};

export default DetailsView;