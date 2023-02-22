import React from "react";
import { Chip } from "../../src/index";

class ChipPage extends React.Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        <div>
          <h3>Default Chip</h3>
          <Chip text="Sayful Islam" />
        </div>
        <div>
          <h3>Default Chip (small)</h3>
          <Chip small={true}>Sayful Islam</Chip>
        </div>

        <div>
          <h3>Deletable Chip</h3>
          <Chip text="Sayful Islam" deletable={true} />
        </div>

        <div>
          <h3>Deletable Chip (small)</h3>
          <Chip text="Sayful Islam" deletable={true} small={true} />
        </div>

        <div>
          <h3>Deletable Chip with Contact</h3>
          <Chip
            text="Sayful Islam"
            deletable={true}
            image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
          />
        </div>

        <div>
          <h3>Deletable Chip with Contact (small)</h3>
          <Chip
            text="Sayful Islam"
            image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
            deletable={true}
            small={true}
          />
        </div>
      </div>
    );
  }

  handleClick() {
    console.log("Button clicked!");
  }
}

export default ChipPage;
