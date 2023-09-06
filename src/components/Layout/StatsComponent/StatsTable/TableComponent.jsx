import React, { useState } from 'react';
import { Table } from 'antd';
import './TableComponent.css';


const columns = [
  {
    title: 'Unique ID',
    dataIndex: 'uniqueId',
  },
  {
    title: 'Student Name',
    dataIndex: 'student-name',
  },
  {
    title: 'College',
    dataIndex: 'college',
  },
  {
    title: 'No. of Webinar Taken',
    dataIndex: 'no-of-webinar-taken',
  },
  {
    title: 'No. of Workshop Enrolled',
    dataIndex: 'no-of-workshop-enrolled',
  },
  {
    title: 'Total Revenue',
    dataIndex: 'total-revenue',
  },
  {
    title: 'No. of Internship Applied',
    dataIndex: 'no-of-internship-applied',
  },
  {
    title: 'Status of Internships',
    dataIndex: 'status-of-internship',
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
    // ajax request after empty completing
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