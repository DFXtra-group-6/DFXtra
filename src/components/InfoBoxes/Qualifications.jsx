import React from 'react'

const Qualifications = ({ data }) => {

    const qualifications = data.qualifications;

    const populate = () => {
        if (qualifications.length <= 0) {
            return (
                <>
                    <div className="text-center border m-4 bg-light">
                        "No qualifications added"
                    </div>
                </>
            );
        }

        const display = qualifications.map(qualification => {
            return (
                <>
                    <div className='col-6'>
                        <div className='icon col-2'>
                            <img src='./certificate.svg' className='icon' alt='place-holder' />
                        </div>
                        <div className='description col-10'>
                            <p>{qualification.name} | {qualification.description}</p>
                            <p>{qualification.institution}</p>
                        </div>
                    </div>
                </>
            )
            return display;
        })
    }
    return (
        <div>
            {populate()}
        </div>
    )
}

export default Qualifications