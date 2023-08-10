import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const Tags: React.FC = () => {
  const [tagInput, setTagInput] = useState<string>(''); // Trạng thái để lưu trữ giá trị đang nhập
  const [tags, setTags] = useState<string[]>([]); // Trạng thái để lưu trữ các tag đã chọn

  const handleTagInputChange = (value: string) => {
    setTagInput(value); // Cập nhật giá trị đang nhập
  };

  const handleTagInputConfirm = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]); // Thêm giá trị đang nhập vào danh sách các tag
    }
    setTagInput(''); // Reset giá trị đang nhập sau khi thêm vào danh sách
  };

  const handleTagClose = (removedTag: string) => {
    const newTags = tags.filter(tag => tag !== removedTag); // Xóa tag khỏi danh sách khi người dùng đóng tag
    setTags(newTags);
  };

  return (
    <Select
      mode="tags"
      style={{ width: '100%' }}
      placeholder="Tags Mode"
      value={tags}
      onChange={setTags} // Cập nhật danh sách tags
      onInputKeyDown={e => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault(); // Ngăn chặn việc tạo dấu phẩy trong input
          handleTagInputConfirm(); // Xác nhận giá trị đang nhập thành tag
        }
      }}
      onBlur={handleTagInputConfirm} // Xác nhận giá trị đang nhập thành tag khi input mất focus
      filterOption={false} // Ngăn chặn việc tự động lọc options
    >
      {tags.map(tag => (
        <Select.Option key={tag} value={tag}>
          {tag}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Tags;
