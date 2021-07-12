import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';
import './Home.css'
const Home = () => {
    const [leagues, setLeagues] = useState([]);
    // const sliceLeague = leagues.slice(0, 12);
    
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])

    return (
            <div>
                <Header league={leagues}></Header>
                <div className="container-fluid d-flex">
                <div className="row p-4" style={{justifyContent: "center"}}>
                    {
                        leagues.map(league => <Leagues
                                key={league.idLeague}
                                league={league}
                        ></Leagues> )
                    }
                </div>
                </div>
            </div>
    );
};

export default Home;