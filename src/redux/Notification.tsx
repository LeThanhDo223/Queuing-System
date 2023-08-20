import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,addDoc} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export interface tableNotification {
    ngd: string;
    thoigian: string;
}
export const fetchPageNo = createAsyncThunk("dataNo/fetchPageNo", async () => {
  const pageCollection = collection(firestore, "dataNo");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableNotification[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableNotification;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableNotification[];
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
  "dataNo/addPageData",
  async (data: tableNotification) => {
    const pageCollection = collection(firestore, "dataNo");
    await addDoc(pageCollection, data);
    return data;
  }
);

export const Notification = createSlice({
  name: "dataNo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageNo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageNo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageNo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default Notification.reducer;
