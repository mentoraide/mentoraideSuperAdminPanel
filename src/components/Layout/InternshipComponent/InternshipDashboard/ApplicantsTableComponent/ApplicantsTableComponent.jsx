import React from 'react'
import "./ApplicantsTableComponent.css"
import { Cascader, Divider, Table } from 'antd';
import InfoCard from './InfoCard/InfoCard';

const options = [
    {
        label: 'Light',
        value: 'light',
        children: new Array(20).fill(null).map((_, index) => ({
            label: `Number ${index}`,
            value: index,
        })),
    },
    {
        label: 'Bamboo',
        value: 'bamboo',
        children: [
            {
                label: 'Little',
                value: 'little',
                children: [
                    {
                        label: 'Toy Fish',
                        value: 'fish',
                    },
                    {
                        label: 'Toy Cards',
                        value: 'cards',
                    },
                    {
                        label: 'Toy Bird',
                        value: 'bird',
                    },
                ],
            },
        ],
    },
];

const columns = [
    {
        title: 'Overview',
        dataIndex: 'overview',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const data = [
    {
        key: '1',
        overview: <InfoCard
            name="Monkey D. Luffy"
            college="Marineford University"
            email="thousandsnny@onepiece"
        />,
        status: 'Accepted',
    },
    {
        key: '2',
        overview: <InfoCard
            name="Gojo Satoru"
            college="Jujutsu Kaisen University"
            email="gojo@jujutsu"
        />,
        status: 'Mail Sent',
    },
    {
        key: '3',
        overview: <InfoCard
            name="Saitama"
            college="Hero University"
            email="saitama@hero"
        />,
        status: 'Rejected',
    },
];

const ApplicantsTableComponent = () => {

    const onChange = (value) => {
        console.log(value);
    };

    return (
        <>

            <div className="applicants-table-container">
                <div className="search-container">
                    <Cascader
                        style={{
                            width: '100%',
                        }}
                        options={options}
                        onChange={onChange}
                        multiple
                        maxTagCount="responsive"
                        defaultValue={['bamboo']}
                    />
                </div>
                <Divider />
                <div className="table-container">
                    <Table
                        columns={columns}
                        dataSource={data}
                    />
                </div>

            </div>

        </>
    )
}

export default ApplicantsTableComponent