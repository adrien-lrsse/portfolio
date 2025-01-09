import { Badge, Card, Container, Image } from "react-bootstrap";
import structApp from './../assets/struct_app.png'
import algoItineraireDistance from './../assets/algo_itineraire_distance.png'


function RoutePlannerFR () {



    return (
        <>
            <h3>
                <Badge bg="#4464AD" className="stack-badge">C</Badge>
                <Badge bg="#4464AD" className="stack-badge">Python & Flask</Badge>
                <Badge bg="#4464AD" className="stack-badge">HTML / CSS / JavaScript</Badge>
            </h3> 
            <Card style={{marginTop: ""}}>
                <Card.Body>
                    <Card.Title>⚙️ Objectif du projet</Card.Title>
                    <Card.Text>
                        Dans ce projet, l'objectif était de produire un algorithme en C qui calcule le plus court chemin entre deux villes françaises sans que la voiture électrique utilisée ne tombe en panne. Une base de données de véhicules et de bornes a été fournie. L'affichage du trajet était optionnel. En plus de cela, le rendu devait intégrer un simulateur de congestion du réseau de recharge.
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="section">
                <h2>L'algorithme</h2>
                <p>
                Pour répondre à ce problème, nous avons utilisé une variante de l'algorithme A*, qui se base sur la contraite de batterie. Cet algorithme est une recherche de chemin qui utilise une heuristique pour accélérer la recherche. L'heuristique utilisée est la distance euclidienne entre la ville actuelle et la ville d'arrivée. L'algorithme A* est utilisé pour trouver le chemin le plus court entre deux villes en tenant compte de la batterie du véhicule.
                </p>
                <Container className="text-center">
                    <Image src={algoItineraireDistance} alt="Algorithme de calcul de l'itinéraire" style={{maxWidth:"75vw" ,maxHeight:"45vh", aspectRatio:"auto"}}/>
                    <p style={{textAlign: 'center', marginTop: '10px'}}>Algorithme de calcul de l'itinéraire</p>
                </Container>
            </div>
            <div className="section">
            <h2>Structure de l'applucation</h2>
                
            <Container className="text-center">
            <Image src={structApp} alt="Structure de l'application" style={{maxWidth:"75vw" ,maxHeight:"55vh", aspectRatio:"auto"}}/>
            <p style={{textAlign: 'center', marginTop: '10px'}}>Structure de l'application</p>
        </Container>
            </div>
            <div className="section">
                <h2>Démonstration</h2>
            </div>
        </>
    );
}

export default RoutePlannerFR;