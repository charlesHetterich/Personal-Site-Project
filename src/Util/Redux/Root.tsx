import { createStore, combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { systemReducer } from "./System";

export const rootReducer = combineReducers({
  system: systemReducer,
});

type RootState = ReturnType<typeof rootReducer>;
export const useSelect: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(rootReducer);
