import React from 'react'
import { Spin } from 'antd';

import ListHeader from './component/ListHeader';
import DoctorTable from './component/DoctorTable';
import DoctorService from '../../domains/doctor-domain/doctorService';

import { LIST } from '../../constants/doctorList'
import DoctorCard from './component/DoctorCard';

export default class Index extends React.Component {
    state = {
        doctorList: [],
        loading: false,
        viewType: LIST,
    }
    componentDidMount() {
        this.getDoctorList()
    }
    getDoctorList = async () => {
        await this.setState({ loading: true });
        let finalState = await DoctorService.getDoctorList({ limit: 50 });
        console.log('finalState:', finalState);
        this.setState(finalState);
    }
    changeTheView = (type) => {
        this.setState({
            viewType: type
        })
    }
    render() {
        const { doctorList, loading, viewType } = this.state;
        return (
            <div>
                <Spin spinning={loading}>
                    <ListHeader getListType={this.changeTheView} />
                    {
                        viewType === LIST
                            ? <DoctorTable doctorList={doctorList} />
                            : <DoctorCard doctorList={doctorList} />
                    }
                </Spin>

            </div>
        )
    }
}