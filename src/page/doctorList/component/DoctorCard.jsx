import React from 'react'
import { List, Card, Avatar } from 'antd'

const Title = ({ doctor }) => {
    const name = doctor.getFullName();
    return <>
        <Avatar>{name[0].toUpperCase()}</Avatar>
        <p>{name}</p>
    </>
}
const DoctorCard = (props) => {
    const { doctorList } = props;
    return <List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
        }}
        dataSource={doctorList}
        renderItem={item => (
            <List.Item>
                <Card title={<Title doctor={item} />}>
                    <p>{item.phoneNumber}</p>
                    <p>{item.languages}</p>
                    {/* <p>{item.bio}</p> */}
                </Card>
            </List.Item>
        )}
    />
}
export default DoctorCard