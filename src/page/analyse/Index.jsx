import React from 'react'
import { ANALYSE } from '../../constants/menu';
import Intro from './components/Intro';
import DoctorService from '../../domains/doctor-domain/doctorService';
import GenderPie from './components/GenderPie';
import { Spin } from 'antd';

const context = '此饼状图展现了男女医生的比例';
export default class Index extends React.Component {
    state = {
        context: '',
        pieData: [],
        width: 600,
        height: 400,
        loading: false
    }
    componentDidMount() {
        this.getGenderBaseData();
    }
    getGenderBaseData = async () => {
        await this.setState({ loading: true });
        const { doctorList, loading } = await DoctorService.getDoctorList({ limit: 50 });
        this.setState({
            pieData: doctorList,
            context,
            loading
        });
    }
    render() {
        const { context, width, height, pieData, loading } = this.state;
        return (
            <Spin spinning={loading}>
                <h3 className="page-title">{ANALYSE}</h3>
                <GenderPie
                    data={pieData}
                    width={width}
                    height={height}
                />
                <Intro context={context} />
            </Spin>
        )
    }
}