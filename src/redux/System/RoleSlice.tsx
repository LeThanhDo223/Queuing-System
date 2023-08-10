import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,addDoc} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";


export interface tableRole {
    tenvt: string;
    sond: string;
    mota: string;
}
export const fetchPageRM = createAsyncThunk("dataRM/fetchPageRM", async () => {
  const pageCollection = collection(firestore, "dataRM");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableRole[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableRole;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableRole[];
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
  "dataRM/addPageData",
  async (data: tableRole) => {
    const pageCollection = collection(firestore, "dataRM");
    await addDoc(pageCollection, data);
    return data;
  }
);

export const RoleSlice = createSlice({
  name: "dataRM",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageRM.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageRM.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageRM.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default RoleSlice.reducer;
