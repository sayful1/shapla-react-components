import React from "react";
import Checkbox from "../src";

class CheckboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = React.createRef();
  }

  render() {
    return (
      <div className="stackonet-admin-app">
        <h4>Open browser console and submit the form.</h4>
        <form
          action=""
          method="post"
          onSubmit={this.handleSubmit}
          id="test-form"
          ref={this.formRef}
        >
          <Checkbox
            name="example_cb_1"
            id="example_cb_1"
            label="Check me"
            value="on"
            onChange={(event) => console.log(event.target.checked)}
          />

          <Checkbox
            name="example_cb_2"
            id="example_cb_2"
            label="Check me"
            checked={true}
            value="off"
            onChange={(event) => console.log(event.target.checked)}
          />
          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(this.formRef.current);
    console.log(formData.get("example_cb_1"));
    console.log(formData.get("example_cb_2"));
  }
}

export default CheckboxPage;
