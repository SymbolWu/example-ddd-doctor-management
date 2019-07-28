import React from 'react'
import { List, Card, Avatar, Tooltip } from 'antd'
// import './DoctorCard.less'
import { CARD_TITLE } from '../../../constants/doctorList';
const Title = ({ doctor }) => {
    const name = doctor.getFullName();
    return <>
        <Avatar src={doctor.avatar} />
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
        className="doctor-list"
        dataSource={doctorList}
        renderItem={item => (
            <List.Item>
                <Card title={<Title doctor={item} />}>
                    <p>{`${CARD_TITLE.PHONE_NUM}:${item.phoneNumber}`}</p>
                    <p>{`${CARD_TITLE.LANG}:${item.languages}`}</p>

                    <Tooltip placement="bottom" title={item.bio}>
                        <p className='doctor-list-bio'>
                            <span>{CARD_TITLE.BIO}:</span>
                            <span className='doctor-list-bio-context'>{item.bio}</span>
                        </p>
                    </Tooltip>

                </Card>
            </List.Item>
        )}
        pagination={{ pageSize: 5, total: doctorList.length }}
    />
}
export default DoctorCard