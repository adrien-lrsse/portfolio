import { Accordion, Badge, Card, Container, Image } from "react-bootstrap";
import astImg from "./../assets/ast.svg";
import { CodeBlock } from "react-code-blocks";



function CompilerFR () {



    return (
        <>
         <h3><Badge bg="#4464AD" className="stack-badge">Java</Badge></h3> 

        <Card style={{marginTop: ""}}>
            <Card.Body>
                <Card.Title>⚙️ Compilateur !? De quoi parle t-on ?</Card.Title>
                <Card.Text>
                    Un compilateur est un programme qui traduit un code source écrit dans un langage de programmation en un autre langage. Il existe plusieurs types de compilateurs, mais les plus courants sont les compilateurs de code source en code objet. Ces compilateurs traduisent le code source en code objet, qui est ensuite exécuté par une machine.
                </Card.Text>
            </Card.Body>
        </Card>
        <div className="section" id="abstract">
            <h2>Résumé</h2>
            <p>Dans ce projet de deuxième année, nous avons suivi un cours sur la traduction qui m'a permis d'apprendre à concevoir un compilateur de A à Z. En complément de ce cours, nous avons réalisé en groupe de quatre un compilateur qui convertit du code Ada en code assembleur ARM 32 bits.</p>
            <p>Les grandes étapes de ce projet ont été : 
            <ul>
                <li>La réalisation d'un lexer</li>
                <li>Un travail sur la grammaire fourni pour lui faire respecter des propriétés importantes (grammaire <i>LL1</i>)</li>
                <li>La réalisation d'un parser</li>
                <li>La réalisation d'un AST (arbre syntaxique)</li>
                <li>La réalisation d'un arbre sémantique</li>
                <li>La génération de code assembleur issue des étapes précédentes</li>
            </ul>
            </p>
        </div>
        
        <div className="section">
            <h2>Résultats</h2>
            <h3>Génération d'AST</h3>
            <p>Un arbre syntaxique abstrait (AST) est une structure de données qui représente la structure d'un programme informatique. Il est utilisé par les compilateurs pour analyser et transformer le code source en code objet.</p>
            <p>Dans notre projet, il s'agit d'une étape clé qui a permis de simplifier la génération de code assembleur ainsi que la réalisation des contrôles sémantiques. Grâce à l'AST, on peut vérifier la validité du code source et générer le code assembleur en parcourant l'arbre de manière récursive. Plus précisément la génération de l'AST ce fait au moment du parsage du code source afin de lire une seule fois l'arbre.</p>
            <p>Voici un exemple de code Ada et de son arbre syntaxique associé :</p>

        <Accordion className="py-3">    
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Voir le code Ada
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

        -- PROCEDURE PRINCIPALE
    begin
        Choix := 2;

        if Choix = 1 then
            Valeur := PerimetreRectangle(2, 3);
            Put(Valeur);
        else
            Valeur := AireRectangle(2, 3);
            Put(Valeur);
        end if;
    end UnDebut; `}
                        language="ada"    
                        />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        <Container className="text-center">
            <Image src={astImg} alt="AST" fluid/>
            <p style={{textAlign: 'center', marginTop: '10px'}}>Exemple d'arbre syntaxique généré</p>
        </Container>
        

        <h3>Génération de code Assembleur</h3>

        Le code final présenté pour ce projet est la compilition d'un code Ada qui réalise un chiffrement est un déchiffrement RSA. Ce code utilise des structures, des fonctions récurcives, des écritures conditionnelles...

        Vous pouvez voir que nous avons compilé en suivant :

        <Accordion className="py-3">
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    Voir le code Ada pour RSA
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

        Le code Assembleur généré étant très long (environ 1300 lignes), il n'est pas présent sur cette page. Cependant, vous pouvez en voir un aperçu dans la démonstration.

        </div>

        <div className="section">
            <h2>Démonstration</h2>
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
            <p>Ce projet m'a permis de mieux comprendre le fonctionnement des compilateurs et de m'initier à la traduction de code. J'ai pu apprendre à manipuler des structures de données complexes et à travailler en équipe sur un projet de grande envergure.</p>
        </div>
        </>
    );
}

export default CompilerFR;