import { Card, Container } from 'react-bootstrap';
import './title.css'
import { useTranslation } from 'react-i18next';


function Title () {

    const { t } = useTranslation('core_components');

    return (
        <>
        <Container>
        <Container style={{width: "fit-content", textAlign: "right"}}>
            <h1>{t("title.line1")}🚀</h1>
            <div className='typewriter'>
                <h1>{t("title.line2")}&nbsp;<span style={{color: "#4464AD", fontFamily: "Rock Salt"}}>Adrien Larousse&nbsp;</span></h1>
            </div>
        </Container>
        <Container style={{width: "fit-content", textAlign: "left"}}>
            <Card style={{marginTop: "5vh"}}>
                <Card.Body>
                    <Card.Title>{t("subtitle")}</Card.Title>
                    <Card.Text>
                        {t("description")}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </Container>
        </>
    );
}

export default Title;