import { ThemeMode } from "../Theme";

// State Types
interface SystemState {
  theme: ThemeMode;
}

// Actions & Action Types
export const CYCLE_THEME = "CYCLE_THEME";
export const SET_THEME = "SET_THEME";
interface CycleThemeAction {
  type: typeof CYCLE_THEME;
}
interface SetThemeAction {
  type: typeof SET_THEME;
  payload: ThemeMode;
}
type SystemAction = CycleThemeAction | SetThemeAction;

// Reducer
const initialSystemState: SystemState = {
  theme: "light",
};
export function systemReducer(
  state = initialSystemState,
  action: SystemAction
): SystemState {
  switch (action.type) {
    case CYCLE_THEME: {
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    }
    case SET_THEME:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
}
