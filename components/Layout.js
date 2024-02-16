import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import Footer from "./Footer";


export default function Layout(props) {
  return (
    <>
    <Navigation />
    <Container>
      {props.children}
      </Container>
      <br/>
      <Footer />
      
    </>
  );
}