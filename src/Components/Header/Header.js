    import Card from 'react-bootstrap/Card';
    import { useParams } from 'react-router-dom';
    import Gallery from '../../gallery.jpg';


    const Header = (props) => {
    const {idLeague} = useParams();
    const {strBadge} = props.league;
    const pageLogo = idLeague ? <img src={strBadge} style={{maxWidth: "150px"}} alt="" /> : <h1 className="header">Champions Vally</h1>;

        return (
            <div className="container-fluid">
                <Card className="bg-dark text-center">
                <Card.Img src={Gallery} alt="Card image" />
                <Card.ImgOverlay style={{display: "grid", placeItems: "center"}}>
                <Card.Title className="text-warning">{pageLogo}</Card.Title>
                </Card.ImgOverlay>
                </Card>
            </div>
        );
};

export default Header;