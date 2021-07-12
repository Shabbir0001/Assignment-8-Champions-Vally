import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import './Leagues.css';


const Leagues = (props) => {
    const {idLeague} = props.league;
    const [details, setDetails] = useState([]);
  
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.leagues))
    }, [idLeague]);
        const history = useHistory()
        const showDetails = idLeague => {
            const url = `league/${idLeague}`;
            history.push(url)
    }
    
    return (
        <Card className="text-center col-md-6 col-sm-12 col-lg-3 m-2" style={{maxWidth: "500px"}}>
            <Card.Body>
                {
                    details.map(detail =>
                        <div>
                            <Card.Img style={{maxWidth: "100px"}} src={detail.strBadge} alt="Card image"/>
                            <Card.Title>
                                <h5>{detail.strLeague}</h5>
                            </Card.Title>
                            <Card.Text>
                                <small >Sport Type: {detail.strSport}</small>
                            </Card.Text>
                                </div>
                    )
               }
               <button onClick={()=> showDetails(idLeague)} className="btn btn-info">Explore  <i class="fas fa-angle-double-right"></i></button>
            </Card.Body>
        </Card>                                   
    );
};

export default Leagues;