import { Button } from "react-bootstrap";

export function Greeting() {
   return <div className="greeting text-white d-flex flex-column align-items-center">
        <h1>Adrian Brandshaug</h1>
        <h2>Front End Student</h2>
        <p>Welcome to my page I am a Front End student based in Bergen with passion for programming</p>
        <Button>contact</Button>
    </div>
}