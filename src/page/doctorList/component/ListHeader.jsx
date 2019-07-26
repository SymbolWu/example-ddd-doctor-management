import React from 'react'
import { Radio, Divider } from 'antd';
import { DOCTOR_LIST } from '../../../constants/menu';
import { CARD, LIST } from '../../../constants/doctorList'
import './ListHeader.css'

export default class ListHeader extends React.Component {
    onChangeListType = (e) => {
        this.props.getListType(e.target.value);
    }
    render() {
        return <div>
            <h3 className="list-title">{DOCTOR_LIST}</h3>
            <Radio.Group defaultValue={LIST} buttonStyle="solid" onChange={this.onChangeListType}>
                <Radio.Button value={LIST}>List</Radio.Button>
                <Radio.Button value={CARD}>Card</Radio.Button>
            </Radio.Group>
            <Divider />
        </div>
    }
}