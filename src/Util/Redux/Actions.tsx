import { store } from "./Root";
import { CYCLE_THEME, SET_THEME } from "./System";
import { ThemeMode } from "../Theme";

export function CycleTheme() {
  store.dispatch({ type: CYCLE_THEME });
}
export function SetTheme(theme: ThemeMode) {
  store.dispatch({ type: SET_THEME, payload: theme });
}
