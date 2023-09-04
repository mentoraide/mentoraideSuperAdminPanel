import React, { useState } from 'react';
import { Table } from 'antd';
import './TableComponent.css';


const columns = [
  {
    title: 'Unique ID',
    dataIndex: 'uniqueId',
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'College',
    dataIndex: 'college',
  },
  {
    title: 'College Email',
    dataIndex: 'college-email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
  },
  {
    title: 'Alternate Phone Number',
    dataIndex: 'alternate-phone',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const TableComponent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing this
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className='table-component'>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default TableComponent;