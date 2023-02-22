import React, { Component } from "react";

class ErrorPage extends Component<Record<string, any>, any> {
  render() {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
}

export default ErrorPage;