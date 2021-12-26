import * as React from "react";
import { Header } from "./widgets/headers/Header";
import { Parameters } from "./widgets/parameters/Parameters";
import { View } from "./widgets/view/View";

import "./mainPage.scss";

export function MainPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="Body">
        <Parameters />
        <View />
      </div>
    </>
  );
}
