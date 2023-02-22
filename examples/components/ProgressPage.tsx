import React from "react";
import { Progress } from "../../src/index";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stackonet-admin-app p-8">
        <div className="mb-8">
          <h2>Example 1: (default theme and size)</h2>
          <Progress max={10} value={2} />
        </div>
        <div className="mb-8">
          <h2>Example 2: (primary theme, small size)</h2>
          <Progress max={10} value={4} theme="primary" size="small" />
        </div>
        <div className="mb-8">
          <h2>Example 3: (secondary theme, small size, striped design)</h2>
          <Progress
            max={10}
            value={4}
            theme="primary"
            size="small"
            striped={true}
          />
        </div>
        <div className="mb-8">
          <h2>
            Example 4: (primary theme, small size, striped and animated design)
          </h2>
          <Progress
            max={10}
            value={4}
            theme="primary"
            size="small"
            striped={true}
            animated={true}
          />
        </div>
        <div className="mb-8">
          <h2>Example 4: (primary theme, indeterminate state)</h2>
          <Progress max={10} theme="primary" size="small" />
        </div>
      </div>
    );
  }
}

export { App };
export default App;
