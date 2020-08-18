import React, { useState, useEffect } from "react";
import { View } from "react-native";

import Types from "./Types";

function Navigation({
  screens,
  initialScreenName,
  type = "stack",
  NavBar = null,
}) {
  const [actualScreen, setActualPage] = useState(initialScreenName);
  const [screenParams, setScreenParams] = useState(null);
  const [navigate, setNavigate] = useState(null);
  const [navChange, setNavChange] = useState(false);

  const handleNavigation = (screenName, params = null) => {
    setNavigate(screenName);
    setScreenParams(params);
  };

  const handleChange = () => {
    if (screens && navigate && navigate !== actualScreen) {
      setNavChange(true);
      setActualPage(navigate);
    }
  };

  useEffect(() => {
    if (navigate && !navChange) {
      handleChange();
    } else {
      setNavChange(false);
    }
  }, [screens, navigate, navChange, handleChange]);

  return (
    <View style={styles.container}>
      {NavBar ? (
        <View style={styles.navigationContainer}>
          <NavBar navigate={handleNavigation} />
        </View>
      ) : null}
      {!navChange ? (
        <Types
          type={type}
          {...screens[`${actualScreen}`]}
          params={screenParams}
          onNavigate={handleNavigation}
          navChange={navChange}
        />
      ) : null}
    </View>
  );
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
  navigationContainer: {
    position: "absolute",
    width: "100%",
    padding: 15,
    zIndex: 50,
    //selectPosition
  },
};

export default Navigation;
