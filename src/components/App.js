import React, { useEffect, useState } from "react";
import ListView from "./ListView";
import DetailsView from "./DetailsView";
import AddEmployee from "./AddEmployee";
import api from '../api/interns';

function App() {
  const [interns,setInterns] = useState([]);

  const retrieveInterns = async () => {
    const response = await api.get("/interns");
    return response.data;
  };

  useEffect(() => {
    const getAllInterns = async () => {
      const allInterns = await retrieveInterns();
      if (allInterns) setInterns(allInterns);
    }
    getAllInterns();
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [addInternClicked, setAddInternClicked] = useState(false);

  const addHandler = async (newItem) => {
    const response = await api.post("/interns", newItem);
    setInterns([...interns, response.data]);
    setAddInternClicked(!addInternClicked);
    setSelectedItem(response.data);
  };
  
  return (
    <div>
      <div>
        <ListView title="Interns" items={interns} onClickHandler={setSelectedItem} />
      </div>
      <div>
        <button onClick={() => setAddInternClicked(!addInternClicked)} style={{marginLeft: "8px", marginTop: "20px", cursor: "pointer"}}>Add Intern</button>
      </div>
      <div>
        {addInternClicked && <AddEmployee addHandler={addHandler} />}
      </div>
      <div>
        {selectedItem && (<DetailsView title="Intern Details" item={selectedItem} />)}
      </div>
    </div>
  );
}

export default App;
