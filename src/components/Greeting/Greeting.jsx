import { Button, Container } from "react-bootstrap";

export function Greeting() {
   return <Container className="greeting text-white ">
        <h1>Adrian Brandshaug</h1>
        <h2>Front End Student</h2>
        <p className="fs-4">Welcome to my page I am a Front End student based in Bergen with passion for programming</p>
        <Button variant="success" size="lg" className="mt-5">contact</Button>
    </Container>
}