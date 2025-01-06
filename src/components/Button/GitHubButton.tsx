import { Button } from "react-bootstrap";

import githubDarkLogo from "./../../assets/github_dark.png";

function GitHubButton ({link}: {link: string}) {
    return (
        <Button href={link} variant='dark' target="_blank"> 
            <img
                src={githubDarkLogo}
                alt="GitHub Logo"
                style={{ width: '20px', marginRight: '10px', alignContent: 'center' }}
            />
            View GitHub Page
        </Button>
    )
}

export default GitHubButton;