import React from "react";
const Interests = ({ data }) => {

    console.dir(data.interests)

    const interests = data.interests;

    const populate = () => {
        const display = interests.map(interest => {
            return (
                <>
                    <div className='row m-1'>
                        <p><strong>{interest.type}</strong></p>
                        <p>{interest.name}</p>
                    </div>
                </>
            )
        })
        return display;
    }

    return (
        <div className="border border-rounded bg-white mb-3">
            <h4>Interests</h4>
            {populate()}
        </div>
    );
};


export default Interests;
