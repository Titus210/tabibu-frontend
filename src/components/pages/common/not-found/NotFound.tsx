import React from 'react'
import { PrimaryButton } from '../../../ui/buttons/PrimaryButton'

import notFoundImage from '../../../../assets/images/not-found.png'

const NotFound = () => {
    return (
        <div className="h-screen w-full  flex flex-col justify-center items-center">
            <div className="flex items-center justify-center flex-col gap-4">
                <div className="image">
                    <img src={notFoundImage} alt="" />
                </div>
                <div className="content">
                    <h1 className="text-4xl">404 - Not Found</h1>
                    <PrimaryButton buttonName='Back to Homepage' bgColor='blue' />
                </div>
            </div>
        </div>
    )
}

export default NotFound