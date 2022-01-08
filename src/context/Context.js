import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {
  user: JSON.parse(window.localStorage.getItem("user")) !== undefined ? JSON.parse(window.localStorage.getItem("user")) : null  ,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  //  const apiURL = "https://radio-iurban-api.vercel.app/api"
  // const apiUrlImg = "https://radio-iurban-api.vercel.app/images/"

    const apiUrlImg = "http://localhost:4000/images/"
   const apiURL = "http://localhost:4000/api"

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        apiURL,
        apiUrlImg
      }}
    >
      {children}
    </Context.Provider>
  );
};


// export const apiUrlContext = createContext();


// export const apiUrlProvider = ({children} ) => {

// const apiURL = "http://localhost:4000/api"


//   return (
//     <apiUrlProvider.Provider value={
//       apiURL
//     }>
//       {children}
//     </apiUrlProvider.Provider>
//   )
// }
