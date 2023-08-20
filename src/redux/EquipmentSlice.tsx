import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export interface tableEquipment {
  id: string;
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

export interface PageState {
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
//sự kiện Cập nhật
export const updatePageData = createAsyncThunk(
  "dataE/updatePageData",
  async (updatedData: tableEquipment) => {
    const pageCollection = collection(firestore, "dataE");

    // Tìm document reference của tài liệu cần cập nhật dựa trên trường id
    const querySnapshot = await getDocs(pageCollection);
    const targetDoc = querySnapshot.docs.find((doc) => doc.data().id === updatedData.id);

    if (targetDoc) {
      const docRef = doc(pageCollection, targetDoc.id);

      // Cập nhật dữ liệu vào Firebase
      await setDoc(docRef, updatedData);
      return updatedData;
    } else {
      throw new Error("Document not found");
    }
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
      }).addCase(updatePageData.fulfilled, (state, action) => {
        state.loading = false;
      
        // Cập nhật dữ liệu đã được thay đổi vào state
        const updatedDataIndex = state.data.findIndex((item) => item.id === action.payload.id);
        if (updatedDataIndex !== -1) {
          state.data[updatedDataIndex] = action.payload;
        }
      }).addCase(updatePageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update data";
      });
  },
});

export default EquipmentSlice.reducer;
