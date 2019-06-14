import { type } from "../action/index";

const changeMenu = (state, action) => {
  switch (action.type) {
    case type.SWITCH_MENU:
      return {
        ...state,
        menuName: action.menuName
      };
      break;
    default:
      return {
        ...state
      };
      break;
  }
};

export default changeMenu;
