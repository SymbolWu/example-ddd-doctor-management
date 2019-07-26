import request from '../../util/http'
export const getDoctorList = (params) => {
    return request('get', '/2016-03-01/practices/1c966a62ce8e18707cf239389dc8e378/doctors/', params);
}