import { createContext, useReducer } from "react";


const initialState = JSON.parse(localStorage.getItem("userDetails")) || {userDetails:null};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        const newState = { ...state, userDetails: action.payload };
        localStorage.setItem('userDetails', JSON.stringify(newState));
        return newState;
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { store, StateProvider };