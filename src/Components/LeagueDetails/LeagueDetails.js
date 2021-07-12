import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import male from '../LeagueDetails/Image/male.png';
import female from '../LeagueDetails/Image/female.png';
import Facebook from '../LeagueDetails/Image/Facebook.png';
import Twitter from '../LeagueDetails/Image/Twitter.png';
import YouTube from '../LeagueDetails/Image/YouTube.png';
import Header from '../Header/Header';



const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [league, setLeague] = useState([]);
    const {strLeague, strCountry, strSport,dateFirstEvent, strGender, strDescriptionEN} = league;
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [idLeague]);
    const banner = strGender === "Male" ? male : female;
    return (
        <div>
            <Header league={league}></Header>
            <div className="container-fluid">
            <div className="row m-4 bg-primary" style={{borderRadius: "10px"}}>
                    <div className="col-md-6 p-5" style={{color:"lightgray"}}>
                        <h1>{strLeague}</h1>
                        <h5><i class="fas fa-stopwatch"></i> Founded: {dateFirstEvent}</h5>
                        <h5><i class="fas fa-flag"></i> Country: {strCountry}</h5>
                        <h5><i class="fas fa-volleyball-ball"></i> Sport Type: {strSport}</h5>
                        <h5><i class="fas fa-venus"></i>  Gender: {strGender}</h5>
                    </div>
                    <div className="col-md-6 d-flex flex-row-reverse p-3">
                        <img src={banner} style={{height:"250px"}} alt="" />
                    </div>
            </div>
                    <p className="row m-5" style={{color:"lightgray"}}>{strDescriptionEN}</p>
                    <div className="row m-5" style={{placeItems: "center", justifyContent: "center"}}> 
                        <img src={Twitter} style={{maxWidth: "50px"}} alt="" />
                        <img src={Facebook} style={{maxWidth: "50px"}} alt="" />
                        <img src={YouTube} style={{maxWidth: "50px"}} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default LeagueDetails;