import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,addDoc} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export interface tableNumberLevel {
    id: string;
    stt: string;
    tenkh: string;
    tendv: string;
    ngay: string;
    gio: string;
    hsd: string;
    tt: string;
    nguonc: string;
    sodt: string;
    mail: string;
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
    // Lấy số lượng tài liệu hiện tại trong bộ sưu tập
    const querySnapshot = await getDocs(pageCollection);
    const numberOfDocuments = querySnapshot.size;

    // Tính toán giá trị "stt" tiếp theo bằng cách tăng số lượng tài liệu lên 1
    const nextStt = numberOfDocuments + 1;
    data.id = nextStt.toString(); // Cập nhật thuộc tính "stt" trong đối tượng data
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
