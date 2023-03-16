import React from 'react'

const Qualifications = ({ qualifications }) => {
    return (
        <div>
            {qualifications.map(qualification => {
                return (
                    <div className='col-6'>
                        <div className='icon col-2'>
                            <img src='./certificate.svg' className='icon' alt='place-holder' />
                        </div>
                        <div className='description col-10'>
                            <p>{qualification.name} | {qualification.description}</p>
                            <p>{qualification.institution}</p>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Qualifications