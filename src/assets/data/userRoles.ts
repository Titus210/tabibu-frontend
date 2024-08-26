
import doctorVector from '../images/doctor-image.png';
import patientVector from '../images/patient-image.png';

export interface Role {
    roleName: string;
    image: string;
}

export const userRoles = [
    {
        roleName: 'Doctor',
        image: doctorVector,
    },
    {
        roleName: 'Patient',
        image: patientVector,
    }
];
