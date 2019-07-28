import React from 'react'
import { Typography } from 'antd';
import { ANALYSE_TITLE } from '../../../constants/analyse';
const { Title, Paragraph } = Typography;

const Intro = ({context})=>{
    return <Typography>
        <Title>{ANALYSE_TITLE}</Title>
        <Paragraph>
            {context}
        </Paragraph>
    </Typography>
}
export default Intro