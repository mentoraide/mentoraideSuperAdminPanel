import React from 'react'
import { Table, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './CompletedInternshipComponent.css'

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

const CompletedInternshipComponent = () => {
    return (
        <>
            <div className="completed-internship-container">
                <Typography.Title className='completed-internship-heading' level={4}>Completed Internships</Typography.Title>
                <div className="completed-internship-table-container">
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

export default CompletedInternshipComponent