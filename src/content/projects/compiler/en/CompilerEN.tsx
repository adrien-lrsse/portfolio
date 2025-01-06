import { Accordion, Badge, Card, Container, Image } from "react-bootstrap";
import astImg from "./../assets/ast.svg";
import { CodeBlock } from "react-code-blocks";

function CompilerEN() {
    return (
        <>
            <h3><Badge bg="#4464AD" className="stack-badge">Java</Badge></h3> 

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

            <div className="section">
                <h2>Results</h2>
                <h3>AST Generation</h3>
                <p>
                    An Abstract Syntax Tree (AST) is a data structure that represents the structure of a computer program. It is used by compilers to analyze and transform source code into object code.
                </p>
                <p>
                    In our project, this was a key step that simplified both the generation of assembly code and semantic checks. With the AST, we could verify the validity of the source code and generate assembly code by recursively traversing the tree. Specifically, the AST generation happens during the parsing of the source code to traverse the tree only once.
                </p>
                <p>Here is an example of Ada code and its associated syntax tree:</p>

                <Accordion className="py-3">    
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            View Ada code
                        </Accordion.Header>
                        <Accordion.Body>
                            <CodeBlock
                                text={`with Ada.Text_IO; use Ada.Text_IO;
procedure UnDebut is
    function AireRectangle(Larg : Integer; Long : Integer) return Integer is
        Aire : Integer;
    begin
        Aire := Larg * Long;
        return Aire;
    end AireRectangle;
    function PerimetreRectangle(Larg : Integer; Long : Integer) return Integer is
        P : Integer;
    begin
        P := Larg * 2 + Long * 2;
        return P;
    end PerimetreRectangle;

    -- VARIABLES
    Choix : Integer;
    Valeur : Integer;

    -- MAIN PROCEDURE
begin
    Choix := 2;

    if Choix = 1 then
        Valeur := PerimetreRectangle(2, 3);
        Put(Valeur);
    else
        Valeur := AireRectangle(2, 3);
        Put(Valeur);
    end if;
end UnDebut;`}
                                language="ada"    
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Container className="text-center">
                    <Image src={astImg} alt="AST" fluid />
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                        Example of a generated syntax tree
                    </p>
                </Container>

                <h3>Assembly Code Generation</h3>

                The final code presented for this project is the compilation of Ada code that performs RSA encryption and decryption. This code uses structures, recursive functions, and conditional statements.

                You can see that we compiled the following:

                <Accordion className="py-3">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            View Ada code for RSA
                        </Accordion.Header>
                        <Accordion.Body>
                        <CodeBlock
                        text={`with Ada.Text_IO; use Ada.Text_IO;

procedure UneFin is

    -- TYPES
    type PK is record -- Public Key
        N, e : Integer;
    end record;

    type SK is record -- Secret Key
        p, q, d : Integer;
    end record;

    type Key is record -- RSA Key
        pub : PK;
        sec : SK;
    end record;

    -- VARIABLES
    K : Key;

    -- FONCTIONS
    function Pow (X : Integer; N : Integer; M : Integer) return Integer
    is  -- Exponentiating by squaring (X^N mod M)
    begin
        if N = 0 then
            return 1;
        elsif N rem 2 = 0 then
            return Pow (X * X rem M, N / 2, M) rem M;
        else
            return X * Pow (X * X rem M, (N - 1) / 2, M) rem M;
        end if;
    end Pow;

    function KeyGen (p : Integer; q : Integer; e : Integer) return Key
    is -- Key generation
        type Bezout is record
            d, u, v : Integer;
        end record;

        K   : Key;
        Phi : Integer := (p - 1) * (q - 1);
        Bez : Bezout;

        function Euclide (a : Integer; b : Integer) return Bezout
        is -- Extended Euclidean algorithm
            tmp, Res : Bezout;
        begin
            if b = 0 then
                Res.d := a;
                Res.u := 1;
                Res.v := 0;
                return Res;
            else
                tmp   := Euclide (b, a rem b);
                Res.d := tmp.d;
                Res.u := tmp.v;
                Res.v := tmp.u - (a / b) * tmp.v;
                return Res;
            end if;
        end Euclide;
    begin
        K.pub.N := p * q;
        K.pub.e := e;

        K.sec.p := p;
        K.sec.q := q;

        Bez := Euclide (Phi, e);
        if Bez.v < 0 then
            K.sec.d := Bez.v + Phi;
        else
            K.sec.d := Bez.v;
        end if;
        return K;
    end KeyGen;

    function Encrypt (M : Integer; K : PK) return Integer is -- Encryption
    begin
        return Pow (M, K.e, K.N);
    end Encrypt;

    function Decrypt (C : Integer; K : SK) return Integer is -- Decryption
    begin
        return Pow (C, K.d, K.p * K.q);
    end Decrypt;

    -- PROCEDURE PRINCIPALE
begin

    K := KeyGen (19, 23, 5);

    for I in 1 .. 10 loop
        Put (I);
        Put ('>');
        if Decrypt (Encrypt (I, K.pub), K.sec) = I then
            Put (character'Val (111)); -- o: ok

            if not (I = 10) and then I >= 0 then
                Put (' ');
            end if;
        else
            Put (character'Val (107)); -- x: error

            if True or else 1 / 0 = 0 then
                Put (' ');
            end if;
        end if;
    end loop;

end UneFin;`}
                        language="ada"
                    />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                The generated Assembly code is very long (about 1300 lines), so it is not displayed on this page. However, you can see a preview in the demonstration.
            </div>

            <div className="section">
                <h2>Demonstration</h2>
                <Container className="text-center" fluid>
                    <iframe
                        style={{ aspectRatio: "16 / 9", width: "75%" }}
                        src="https://www.youtube.com/embed/5x9kNaqDWXs?si=_DrnL6Cz2pI5NWzr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </Container>
            </div>

            <div className="section">
                <h2>Conclusion</h2>
                <p>
                    This project allowed me to better understand how compilers work and to gain an introduction to code translation. I learned how to manipulate complex data structures and to work in a team on a large-scale project.
                </p>
            </div>
        </>
    );
}

export default CompilerEN;
