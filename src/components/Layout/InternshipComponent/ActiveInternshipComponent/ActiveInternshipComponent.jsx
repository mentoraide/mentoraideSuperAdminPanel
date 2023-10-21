import { Typography } from 'antd'
import React from 'react'
import './ActiveInternshipComponent.css'
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'Internship Title',
        dataIndex: 'internshipTitle',
        key: 'internshipTitle',
        render: text => <Link to="/internship-dashboard">{text}</Link>,
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
    },
    {
        title: 'No. of Applicants',
        dataIndex: 'noOfApplicants',
        key: 'noOfApplicants',
    },
];

const data = [

    {
        key: '1',
        internshipTitle: 'Frontend Engineer',
        companyName: 'Google',
        noOfApplicants: '1000',
    },
    {
        key: '2',
        internshipTitle: 'Backend Engineer',
        companyName: 'Google',
        noOfApplicants: '1010',
    },
    {
        key: '3',
        internshipTitle: 'Software Engineer',
        companyName: 'Google',
        noOfApplicants: '999',
    },
    {
        key: '4',
        internshipTitle: 'Data Engineer',
        companyName: 'Google',
        noOfApplicants: '100',
    },
    {
        key: '5',
        internshipTitle: 'Data Scientist',
        companyName: 'Google',
        noOfApplicants: '100',
    }
];

const ActiveInternshipComponent = () => {
    return (
        <>
            <div className="active-internship-container">
                <Typography.Title className='active-internship-heading' level={4}>Active Internships</Typography.Title>
                <div className="active-internship-table-container">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={{
                            pageSize: 50,
                        }}
                        scroll={{
                            y: 240,
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default ActiveInternshipComponent