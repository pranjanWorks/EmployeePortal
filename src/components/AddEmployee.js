import React, { useState } from "react";

const AddEmployee = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [primaryNo, setPrimaryNo] = useState("");
    const [ext, setExt] = useState("");
    
    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || department === "" || primaryNo === "" || ext === "") {
            alert("All fields are mandatory");
            return;
        }
        props.addHandler({ name, email, department, primaryNo, ext });
    };
    
    return (
        <div style={{width: "800px", marginLeft: "8px", marginTop: "4px", border: "2px solid #000", boxSizing: "border-box", padding: "4px"}}>
            <form onSubmit={add}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} style={{marginLeft: "4px", marginTop: "4px"}}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginLeft: "4px", marginTop: "4px"}}></input>
                </div>
                <div>
                    <label>Department</label>
                    <input type="text" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} style={{marginLeft: "4px", marginTop: "4px"}}></input>
                </div>
                <div>
                    <label>Primary Number</label>
                    <input type="text" name="primaryNumber" value={primaryNo} onChange={(e) => setPrimaryNo(e.target.value)} style={{marginLeft: "4px", marginTop: "4px"}}></input>
                </div>
                <div>
                    <label>Ext</label>
                    <input type="text" name="ext" value={ext} onChange={(e) => setExt(e.target.value)} style={{marginLeft: "4px", marginTop: "4px"}}></input>
                </div>
                <button style={{marginTop: "4px", cursor: "pointer"}}>Submit</button>
            </form>
        </div>
    );
};

export default AddEmployee;