import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authStateChanged } from "../redux/auth/authOperations";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "../router";

function Main() {
    const { stateChange } = useSelector(state => state.auth);
    

    const dispatch = useDispatch();

  useEffect(() => {
      dispatch(authStateChanged());
      console.log(stateChange);
  }, []);

  const routing = useRoute(stateChange);

  return (
      <NavigationContainer>
        {routing}
      </NavigationContainer>
  );
}

export default Main;
