export default class Doctor {
    constructor(doctor={}){
        this.id= doctor.id;
        this.key= doctor.id;
        this.firstName= doctor.firstName;
        this.middleName= doctor.middleName;
        this.lastName= doctor.lastName;
        this.phoneNumber= doctor.phoneNumber;
        this.languages=doctor.languages;
        this.bio= doctor.bio
    }
    getFullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName} `
    }
}