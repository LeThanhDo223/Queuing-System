import { configureStore } from "@reduxjs/toolkit";
import EquipmentSlice from "./EquipmentSlice";
import ServiceSlice from "./ServiceSlice";
import NumberLevelSlice from "./NumberLevelSlice";
import ReportSlice from "./ReportSlice";
import RoleSlice from "./System/RoleSlice";
import AccountSlice from "./System/AccountSlice";
import UserLogsSlice from "./System/UserLogsSlice";


export const store = configureStore({
  reducer: {
    equipment: EquipmentSlice,
    service: ServiceSlice,
    numberlevel: NumberLevelSlice,
    report: ReportSlice,
    role: RoleSlice,
    account: AccountSlice,
    userlog: UserLogsSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
