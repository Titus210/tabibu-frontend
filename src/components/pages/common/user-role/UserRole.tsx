import React, { useState } from 'react';
import { userRoles, Role } from "../../../../assets/data/userRoles";
import { PrimaryButton } from '../../../ui/buttons/PrimaryButton';

const UserRole: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleRoleClick = (roleName: string) => {
        setSelectedRole(roleName);
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center gap-4">
                <div className="w-full flex flex-col gap-2 relative bg-slate-2500 items-center justify-center md:flex-row md:w-4/6 lg:w-3/6">
                    {userRoles.map((role: Role, index: number) => (
                        <div
                            key={index}
                            onClick={() => handleRoleClick(role.roleName)}
                            className={`flex flex-col items-center justify-center w-full p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer ${
                                selectedRole === role.roleName ? 'bg-slate-300' : 'bg-slate-100'
                            }`}
                        >
                            <img src={role.image} alt={role.roleName} className="h-48 md:h-64 mb-4" />
                            <p className="text-pink font-bold">{role.roleName}</p>
                        </div>
                    ))}
                    <p className="text-lg absolute bottom-[46%] left-[46%] p-2 rounded-full bg-slate-200 font-bold">OR</p>
                </div>
                <div className="button">
                    <PrimaryButton 
                        buttonName='Continue' 
                        bgColor='blue' 
                        onClick={() => console.log(`Selected role: ${selectedRole}`)}
                        type="button"
                        disabled={!selectedRole} 
                    />
                </div>
            </div>
        </div>
    );
};

export default UserRole;
