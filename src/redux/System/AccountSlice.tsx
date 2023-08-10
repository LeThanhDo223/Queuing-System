import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,addDoc} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";


export interface tableAccount {
    tendn: string;
    hoten: string;
    sdt: string;
    email: string;
    vaitro: string;
    tthd: string;
}
export const fetchPageA = createAsyncThunk("dataA/fetchPageA", async () => {
  const pageCollection = collection(firestore, "dataA");
  const querySnapshot = await getDocs(pageCollection);
  const pageData: tableAccount[] = [];
  querySnapshot.forEach((doc) => {
    const dataE = doc.data() as tableAccount;
    pageData.push(dataE);
  });
  return pageData;
});

interface PageState {
  data: tableAccount[];
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
  "dataA/addPageData",
  async (data: tableAccount) => {
    const pageCollection = collection(firestore, "dataA");
    await addDoc(pageCollection, data);
    return data;
  }
);

export const AccountSlice = createSlice({
  name: "dataA",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageA.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPageA.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPageA.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default AccountSlice.reducer;
