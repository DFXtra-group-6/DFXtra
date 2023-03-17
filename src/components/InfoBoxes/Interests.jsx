import React from 'react'

const Interests = ({ interests }) => {
    return (
        <div>{interests.map(interest => {
            return (
                <>
                    <div className='icon col-2'>
                        <img src='./certificate.svg' className='icon' />
                    </div>
                    <div className='description col-10'>
                        <p>{interest.type}</p>
                        <p>{interest.name}</p>
                    </div>
                </>
            )
        })

        }</div>
    )
}

export default Interests