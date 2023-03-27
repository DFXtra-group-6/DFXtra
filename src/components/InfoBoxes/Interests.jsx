import React from "react";

const Interests = ({ interests }) => {
  return (
    <div className="border border-rounded bg-white mb-3">
      <h4>Interests</h4>
      {/* {interests.map(interest => {

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


            } */}
    </div>
  );
};


export default Interests;
