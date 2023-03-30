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
                <>
                    <container className='row m-1'>
                        <div className='icon col'>
                            <img src={placeHolder} className='icon' />
                        </div>
                        <div className='description col'>
                            <p>{keyTool}</p>
                        </div>
                    </container>
                </>
            )
        })
        return display;
    }

    return (
        <div className="border border-rounded bg-white mb-3">
            <h4>Key Tools</h4>
            {populate()}
        </div>
    );
};

export default KeyTools;
