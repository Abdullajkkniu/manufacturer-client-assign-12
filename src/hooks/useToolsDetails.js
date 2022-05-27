import { useEffect, useState } from "react";

const useToolsDetails = purchaseId =>{
    const [tools, setTools] = useState({});
    useEffect( ()=>{
        const url = `http://localhost:5000/tools/${purchaseId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setTools(data));
    },[purchaseId]);
    return [tools];
}

export default useToolsDetails;