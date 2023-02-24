import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { authStateChangedUser } from "../redux/auth/authOperations";
import useRoute from "../router";

function Main() {
    const { stateChange } = useSelector(state => state.auth);
    
    const dispatch = useDispatch();

  useEffect(() => {
      dispatch(authStateChangedUser());
  }, []);

  const routing = useRoute(stateChange);

  return (
      <NavigationContainer>
        {routing}
      </NavigationContainer>
  );
}

export default Main;
