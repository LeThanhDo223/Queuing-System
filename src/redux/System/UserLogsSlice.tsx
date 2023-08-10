import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";


export interface tableUserLogs {
    tendn: string;
    tgtd: string;
    ip: string;
    ttth: string;
}
export const fetchPageU = createAsyncThunk("dataU/fetchPageU", async () => {
  const pageCollection = collection(firestore, "dataU");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableUserLogs[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableUserLogs;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableUserLogs[];
  loading: boolean;
  error: string | null;
}

const initialState: PageState = {
  data: [],
  loading: false,
  error: null,
};

export const UserLogsSlice = createSlice({
  name: "dataU",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageU.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageU.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageU.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default UserLogsSlice.reducer;
