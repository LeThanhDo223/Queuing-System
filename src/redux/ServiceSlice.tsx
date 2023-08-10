import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,addDoc} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export interface tableService {
    madv: string;
    tendv: string;
    mota: string;
    tthd: string;
    read: string;
    update: string;
}
export const fetchPageS = createAsyncThunk("dataS/fetchPageS", async () => {
  const pageCollection = collection(firestore, "dataS");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableService[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableService;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableService[];
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
  "dataS/addPageData",
  async (data: tableService) => {
    const pageCollection = collection(firestore, "dataS");
    await addDoc(pageCollection, data);
    return data;
  }
);

export const ServiceSlice = createSlice({
  name: "dataS",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageS.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageS.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default ServiceSlice.reducer;
