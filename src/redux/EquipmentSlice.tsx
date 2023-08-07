import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,addDoc} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export interface tableEquipment {
  matb: string;
  tentb: string;
  diachi: string;
  tthd: string;
  ttkn: string;
  dichvu: string;
  tendn: string;
  mk: string;
  loaitb: string;
}
export const fetchPageE = createAsyncThunk("dataE/fetchPageE", async () => {
  const pageCollection = collection(firestore, "dataE");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableEquipment[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableEquipment;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableEquipment[];
  loading: boolean;
  error: string | null;
}

const initialState: PageState = {
  data: [],
  loading: false,
  error: null,
};
// sự kiện thêm thiết bị
export const addPageData = createAsyncThunk(
  "dataE/addPageData",
  async (data: tableEquipment) => {
    const pageCollection = collection(firestore, "dataE");
    await addDoc(pageCollection, data);
    return data;
  }
);

export const EquipmentSlice = createSlice({
  name: "dataE",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageE.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageE.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageE.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default EquipmentSlice.reducer;
