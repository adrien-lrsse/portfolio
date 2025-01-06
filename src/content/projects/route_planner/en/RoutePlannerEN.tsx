import { Badge, Card } from "react-bootstrap";


function RoutePlannerEN() {
    return (
        <>
            <h3>
                <Badge bg="#4464AD" className="stack-badge">C</Badge>
                <Badge bg="#4464AD" className="stack-badge">Python & Flask</Badge>
                <Badge bg="#4464AD" className="stack-badge">HTML / CSS / JavaScript</Badge>
            </h3> 
            <Card style={{ marginTop: "" }}>
                <Card.Body>
                    <Card.Title>⚙️ Compiler!? What are we talking about?</Card.Title>
                    <Card.Text>
                        A compiler is a program that translates source code written in a programming language into another language. There are several types of compilers, but the most common ones are source-to-object code compilers. These compilers translate the source code into object code, which is then executed by a machine.
                    </Card.Text>
                </Card.Body>
            </Card>

            <div className="section" id="abstract">
                <h2>Abstract</h2>
                <p>
                    In this second-year project, we took a course on translation that taught me how to design a compiler from A to Z. In addition to this course, we worked in a group of four to create a compiler that converts Ada code into ARM 32-bit assembly code.
                </p>
                <p>The major steps of this project were:
                    <ul>
                        <li>Creating a lexer</li>
                        <li>Working on the provided grammar to make it adhere to important properties (<i>LL1</i> grammar)</li>
                        <li>Creating a parser</li>
                        <li>Building an AST (Abstract Syntax Tree)</li>
                        <li>Building a semantic tree</li>
                        <li>Generating assembly code based on the previous steps</li>
                    </ul>
                </p>
            </div>

                    </>
    );
}

export default RoutePlannerEN;
