import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PageDichVu, addPageData } from "../redux/dataDichVu";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const DataForm: React.FC = () => {
  const dispatch = useDispatch();

  const [newData, setNewData] = useState<PageDichVu>({
    stt: 0,
    gia: "",
    giacombo: "",
    combo: "",
    tengoi: "",
    tt: "",
  });

  const handleAddData = async () => {
    try {
      await addDoc(collection(firestore, "dichvu"), {
        ...newData,
      });

      // Gửi dữ liệu đến Redux
      dispatch(addPageData(newData) as any);

      // Xóa các trường trong form
      setNewData({
        stt: 0,
        gia: "",
        giacombo: "",
        combo: "",
        tengoi: "",
        tt: "",
      });
    } catch (error) {
      console.error("Lỗi khi thêm dữ liệu:", error);
    }
  };

  return (
    <div>
       <input
        type="number"
        value={newData.stt}
        onChange={(e) => setNewData({ ...newData, stt: Number(e.target.value) })}
        placeholder="STT"
      />
      <input
        type="text"
        value={newData.gia}
        onChange={(e) => setNewData({ ...newData, gia: e.target.value })}
        placeholder="Giá"
      />
      <input
        type="text"
        value={newData.giacombo}
        onChange={(e) => setNewData({ ...newData, giacombo: e.target.value })}
        placeholder="Giá combo"
      />
      <input
        type="text"
        value={newData.combo}
        onChange={(e) => setNewData({ ...newData, combo: e.target.value })}
        placeholder="Combo"
      />

      <input
        type="text"
        value={newData.tengoi}
        onChange={(e) => setNewData({ ...newData, tengoi: e.target.value })}
        placeholder="Tên gói"
      />
      <input
        type="text"
        value={newData.tt}
        onChange={(e) => setNewData({ ...newData, tt: e.target.value })}
        placeholder="tt"
      />

      <button onClick={handleAddData}>Thêm dữ liệu</button>
    </div>
  );
};

export default DataForm;
