import React from 'react'
import { Table } from 'antd'
const columns = [
    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
    { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber' },
    { title: 'Languages', dataIndex: 'languages', key: 'languages' },
]
const DoctorTable = (props) => {
    const { doctorList } = props;
    return <Table
        dataSource={doctorList}
        columns={columns}
    />
}
export default DoctorTable
