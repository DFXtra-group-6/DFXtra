import React from "react";
import placeHolder from './images/certificate.svg';
import './certifications.css';

const KeyTools = ({ data }) => {

    const keyTools = data.keyTools;

    const populate = () => {
        if (keyTools.length <= 0) {
            return (
                <>
                    <div className="text-center border m-4 bg-light">
                        "No key tools added"
                    </div>
                </>
            );
        }
        const display = keyTools.map(keyTool => {

            return (

                <div className=' col m-2'>
                    <div className='icon'>
                        <img src={placeHolder} className='icon' />
                        <p className='description'>{keyTool}</p>
                    </div>
                </div>

            )
        })
        return display;
    }

    return (
        <div className="border border-rounded bg-white mb-3">
            <h4>Key Tools</h4>
            <div className="row keyTools">
                {populate()}
            </div>
        </div>
    );
};

export default KeyTools;
