import { useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

const popUserInfo = (state: RootState) => state.auth;

export const useAuth = () => useSelector(popUserInfo);
