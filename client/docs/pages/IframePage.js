import React, { Component } from "react";
import { Container, Iframe } from "mdbreact";
import DocsLink from "./DocsLink";

class IframePage extends Component {
  render() {
    return (
      <Container className="text-center">
        <DocsLink
          title="You are logged out! Thanks for choosing [Subject] YouTube!"
          href="/css"
        />
        <Iframe src="https://www.youtube.com/embed/q81suQISQok" />
      </Container>
    );
  }
}

export default IframePage;
