import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export interface tableReport {
    stt: string;
    tendv: string;
    ngay: string;
    gio: string;
    tt: string;
    nguonc: string;
}
export const fetchPageR = createAsyncThunk("dataR/fetchPageR", async () => {
  const pageCollection = collection(firestore, "dataR");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableReport[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableReport;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableReport[];
  loading: boolean;
  error: string | null;
}

const initialState: PageState = {
  data: [],
  loading: false,
  error: null,
};


export const ReportSlice = createSlice({
  name: "dataR",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageR.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageR.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageR.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default ReportSlice.reducer;
