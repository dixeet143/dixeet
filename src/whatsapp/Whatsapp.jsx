import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import "./whatsapp.css";
import Chatlist from './Chatlist';

export default function Whatsapp() {
    const [first, setFirst] = useState(true);
    const [bgw, setbgw] = useState("phon")


    useEffect(() => {
        const intervalId = setInterval(() => {
            setFirst(false);
            setbgw("phon1")
        }, 3000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div>
            <Navbar />

            <div className='d-flex justify-content-center my-3'>
                <div className={`${bgw}`}>
                    {first ? (
                        <div className="spinner-border text-success" role="status" style={{ height: "80px", width: "80px" }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <Chatlist first={first} />
                    )}
                </div>
            </div>
        </div>
    );
}
