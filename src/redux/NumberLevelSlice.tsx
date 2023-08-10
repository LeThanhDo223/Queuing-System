import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,addDoc} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export interface tableNumberLevel {
    stt: string;
    tenkh: string;
    tendv: string;
    tgc: string;
    hsd: string;
    tt: string;
    nguonc: string;
}
export const fetchPageNL = createAsyncThunk("dataNL/fetchPageNL", async () => {
  const pageCollection = collection(firestore, "dataNL");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableNumberLevel[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableNumberLevel;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableNumberLevel[];
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
  "dataNL/addPageData",
  async (data: tableNumberLevel) => {
    const pageCollection = collection(firestore, "dataNL");
    await addDoc(pageCollection, data);
    return data;
  }
);

export const NumberLevelSlice = createSlice({
  name: "dataNL",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageNL.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageNL.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageNL.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default NumberLevelSlice.reducer;
