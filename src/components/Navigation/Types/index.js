import React from "react";
import Navigation from "../NavigationTypes";

export default function Types(props) {
  const { type } = props;
  switch (type) {
    default:
      return <Navigation.Stack {...props} />;
  }
}
