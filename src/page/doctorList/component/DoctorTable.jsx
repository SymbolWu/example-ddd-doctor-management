import React from 'react'
import { Table } from 'antd'
// import './DoctorTable.less'
const columns = [
    { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
    { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber' },
    { title: 'Languages', dataIndex: 'languages', key: 'languages' },
]
const DoctorTable = (props) => {
    const { doctorList } = props;
    return <Table
        className="doctor-table"
        dataSource={doctorList}
        columns={columns}
    />
}
export default DoctorTable
