import reducer from "../reducer/index";
import { createStore } from "redux";

const initState = {
  menuName: ""
};

const StoreConfig = () => createStore(reducer, initState);
export default StoreConfig;
