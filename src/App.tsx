import React from "react";
import "./App.css";
import { Button, Col, Row, Container } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1> Top 3 barnyard characters </h1>
            <ul>
                <li>Otis the Cow</li>
                <li>Fat Pig</li>
                <li>Snotty Boy</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ryan Hallett Hello World
            </p>
            <Button onClick={() => { console.log("Hello World!"); }} >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{ width: "100px", height: "100px", backgroundColor: "red", }}
                        />
                    </Col>

                    <Col>
                        <div
                            style={{ width: "100px", height: "100px", backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <img src="/Otis_the_Cow.jpg" alt="Otis the Cow" />
        </div>
    );
}

export default App;
