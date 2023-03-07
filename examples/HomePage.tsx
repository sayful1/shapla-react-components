import React, { Component } from "react";
import { routerLinks } from "./router";
import { Column, Columns } from "../src";
import { Link } from "react-router-dom";

class HomePage extends Component<any, any> {
  render() {
    return (
      <Columns multiline={true}>
        {routerLinks.map((link) => {
          return (
            <Column tablet={3} key={link.path}>
              <Link to={link.path} className="shapla-button is-fullwidth">
                {link.label}
              </Link>
            </Column>
          );
        })}
      </Columns>
    );
  }
}

export default HomePage;
