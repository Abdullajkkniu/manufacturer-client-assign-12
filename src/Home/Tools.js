import React from 'react';
import  { useEffect, useState } from 'react';
import Tool from './Tool';
import { Link } from 'react-router-dom';
import '../Home/Tools.css';


const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5001/tool')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[])
    return (
        <div>
            <h1 className='text-center mt-10 text-warning font-bold'>OUR MANUFACTURED</h1>
            <h1 className='text-center  text-4xl font-bold text-info'>TOOLS</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                tools.slice(0, 6).map(tool=> <Tool key={tool._id} tool={tool}></Tool> )
            }
            
            
        </div>
        
        </div>
    );
};

export default Tools;