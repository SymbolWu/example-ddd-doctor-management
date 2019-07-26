import { getDoctorList } from "../../data-source/doctor/requestApis";
import { doctorsTranslator } from '../../data-source/doctor/translators'
import Doctor from "./entities/doctors";

export default class DoctorService {
    /**
     * Get doctor info
     */
    static async getDoctorList(params) {
        let doctorList = [];
        try {
            doctorList = await getDoctorList(params);
        } catch (error) {
            console.log('getDoctorList Error:', error);
        }
        return {
            doctorList: doctorList.data.map(item => new Doctor(doctorsTranslator(item))),
            loading: false
        }
    }
}