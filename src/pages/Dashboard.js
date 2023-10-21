//Hold all user events
import { useEffect, useState } from 'react';
import './Dashboard.css'

export default function Dashboard(){
    const [stats, setStats] = useState();
    const numbers = [1,1,1,1];

    return(
        <div className='dashboard-main'>
            {numbers.map((num) => (
                <Stat></Stat>
            ))}
        </div>

    )
}



function Stat(){
    const [num, setNum] = useState(1);

    function updateCounter(){
        setNum(num + 1);
    }

    return(
        <>
            <div className="stat-box">
                <h2>This is a title</h2>
                <p>This is some subtext</p>
                <button className='button' onClick={updateCounter}>This is a button</button>
                <h2>This is a counter : {num}</h2>
            </div>
        </>
    )
}