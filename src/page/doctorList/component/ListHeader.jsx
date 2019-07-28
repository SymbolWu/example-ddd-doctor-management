import React from 'react'
import { Radio, Divider, Icon } from 'antd';
import { DOCTOR_LIST } from '../../../constants/menu';
import { CARD, LIST } from '../../../constants/doctorList'

export default class ListHeader extends React.Component {
    onChangeListType = (e) => {
        this.props.getListType(e.target.value);
    }
    render() {
        return <div className="doctor-list-header">
            <h3 className="page-title">{DOCTOR_LIST}</h3>
            <Radio.Group
                className="view-type"
                defaultValue={LIST}
                buttonStyle="solid"
                onChange={this.onChangeListType}>
                <Radio.Button value={LIST}>
                    <Icon type="menu" />
                </Radio.Button>
                <Radio.Button value={CARD}>
                    <Icon type="appstore" />
                </Radio.Button>
            </Radio.Group>
            <Divider />
        </div>
    }
}