import * as React from "react";
import * as ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import { MainPage } from "./ui/MainPage";

function App(): JSX.Element {
  return <MainPage />;
}

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals(console.log);
