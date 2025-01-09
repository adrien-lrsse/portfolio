import { Container, Row, Col, Image, Button } from "react-bootstrap";
import githubDarkLogo from '../assets/github_dark.png';
import linkedinLogo from '../assets/linkedin_logo.png';
import { useTranslation } from "react-i18next";
import './AboutMe.css';

function AboutMe() {
  const { t } = useTranslation('about_me');

  return (
    <Container className="py-5">
        <Row>
            <Col xs={12} md={3}>
                <Image src='/portfolio/assets/pp.png' roundedCircle fluid />
                <Col className="text-center mt-4">
                    <Row>
                        <h3>{t("aboutMe.name")}</h3>
                    </Row>
                    <Row>
                        <p>{t("aboutMe.age", { age: 22 })}</p>
                    </Row>
                    <Row>
                        <p>{t("aboutMe.student")}</p>
                    </Row>
                    <Row>
                        <p>{t("aboutMe.location")}</p>
                    </Row>
                </Col>
            </Col>
            <Col xs={12} md={9}>
                <Row>
                    <Container className="my-2 text-center">
                        <h3>{t("aboutMe.resources")}</h3>
                        <Button href="https://github.com/adrien-lrsse" variant='dark' target="_blank" className="m-2">
                            <img
                                src={githubDarkLogo}
                                alt="GitHub Logo"
                                style={{ width: '20px', marginRight: '10px', alignContent: 'center' }}
                            />
                            {t("aboutMe.github")}
                        </Button>
                        <Button href="https://www.linkedin.com/in/adrienlarousse/" variant='dark' target="_blank" className="m-2 linkedin-button">
                            <img
                                src={linkedinLogo}
                                alt="Linkedin Logo"
                                style={{ width: '20px', marginRight: '10px', alignContent: 'center' }}
                            />
                            {t("aboutMe.linkedin")}
                        </Button>
                        <a href="https://drive.google.com/file/d/1t6rxC3Ibm4uO5dGkF3qHJribM76Ri5OL/view?usp=sharing" download target="_blank">
                            <Button variant='warning' className="m-2">
                                {t("aboutMe.resume")}
                            </Button>
                        </a>
                    </Container>
                </Row>
                <Row>
                    <Container className="py-2 text-center">
                        <h3>{t("aboutMe.languages")}</h3>
                        <Row className="my-2">
                            <Col>
                                <p><b>{t("aboutMe.french")}</b></p>
                            </Col>
                            <Col>
                                <p><b>{t("aboutMe.english")}</b></p>
                            </Col>
                            <Col>
                                <p><b>{t("aboutMe.german")}</b></p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="py-2 text-center">
                        <h3>{t("aboutMe.skills")}</h3>
                        <Image src='https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' fluid className="m-2" />
                        <Image src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' fluid className="m-2" />
                        <Image src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" fluid className="m-2" />
                        <Image src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" fluid className="m-2" />
                        <Image src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" fluid className="m-2" />
                        <Image src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" fluid className="m-2" />
                        <Image src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" fluid className="m-2" />
                        <Image src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" fluid className="m-2" />
                    </Container>
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default AboutMe;
