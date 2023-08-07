import { configureStore } from "@reduxjs/toolkit";
import EquipmentSlice from "./EquipmentSlice";
import pageSlice from './demoSlice';
import dataDichVu from "./dataDichVu";


export const store = configureStore({
  reducer: {
    equipment: EquipmentSlice,
    page: pageSlice,
    dataDV:dataDichVu,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
