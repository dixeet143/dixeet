import React, { useState, useEffect } from 'react';
import './menu.css';
import icon from '../Imd_icom';
import { NavLink } from 'react-router-dom';
import { MdPhoto } from 'react-icons/md';

export default function Me(props) {
    const {
        IoMdSend,
        MdKeyboardVoice,
        FaCamera,
        MdAdd,
        FaArrowLeft,
        IoMdPhotos,
        IoDocumentTextOutline,
        MdOutlineCancel,
        IoIosContact,
        IoLocation,
    } = icon; // icon  icon

    const locl = () => {

        const data = localStorage.getItem("whatsapp")
        if (data) {
            return JSON.parse(data)
        }
        else {
            return []
        }
    }

    const [Message, setMessage] = useState('');
    const [Messagelist, setMessagelist] = useState(locl());
    const [adddt, setadddt] = useState(false);
    const [pas, setpas] = useState(0);
    const [sendicon, setsendicon] = useState(false);
    const [iconaddcansl, seticonaddcansl] = useState(<MdAdd className='fs-5' />);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [msgnone, setmsgnone] = useState(false)
    // const [fotaa, setfotaa] = useState(false)


    let d = new Date().toLocaleTimeString()

    console.log("date", d);

    const Send = (Messages, selectedImage, d) => {
        if (Messages !== "" || selectedImage !== null) {

            const newlist = [...Messagelist, { name: Messages, selectedImage: selectedImage, ate: d }];
            setMessagelist(newlist);
            console.log('newlist', newlist);
        }

        setMessage('');
        setsendicon(false);
        setSelectedImage(null)
    };



    const Messagef = (e) => {
        const newmsech = e.target.value;
        setMessage(newmsech);
        setsendicon(true);
    };


    const addd = () => {
        if (pas % 2 === 0) {
            setadddt(true);
            setpas(pas + 1);
            seticonaddcansl(<MdOutlineCancel className='fs-5 mb-1' />);
        } else {
            setadddt(false);
            setpas(pas + 1);
            seticonaddcansl(<MdAdd className='fs-5 mb-1' />);
        }
    };


    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        localStorage.setItem("whatsapp", JSON.stringify(Messagelist))

    }, [Messagelist])


    return (
        <div>
            <div className='containercc'>
                <div className='chatBox'>
                    <div className='chat-Header'>
                        <div className='imgContent'>
                            <NavLink to='/'>
                                <FaArrowLeft className='text-light me-1' />
                            </NavLink>
                            <div className='imgBx dp_stlet text-light'>{props.name.charAt(0)}</div>
                            <h3 className='mx-3 pt-1'>
                                {props.name}
                                <br />
                                <span>online</span>
                            </h3>
                        </div>
                        <div className='actionBtns'>
                            <ion-icon name='videocam'></ion-icon>
                            <ion-icon name='call'></ion-icon>
                            <ion-icon name='ellipsis-vertical'></ion-icon>
                        </div>
                    </div>
                    <div className='messageBox'>
                        <div className='message px-4' style={{ textAlign: 'right' }}>
                            hello<br />
                            <span className='time'>11:56</span>
                        </div>

                        {Messagelist.map((e, index) => (
                            <div key={index} className='message px-4 ' style={{ textAlign: 'right' }}>
                                <p className='m-0'>
                                    {e.name} <br /> <span className='time'>{e.ate}</span>
                                </p>



                            </div>
                        ))}

                        {adddt && (
                            <div className='messageInput1' style={{ marginBottom: '65px' }}>
                                <div className='d-flex'>
                                    <input type="file" className='sm-input-file' id='sm-ip-1' accept="image/*" onChange={handleFileChange} />
                                    <label className='for-sm-input-file d-flex' htmlFor='sm-ip-1'>
                                        <IoMdPhotos className='fs-4 me-2' /> <p>Photos</p>
                                    </label>
                                </div>
                                <div className='d-flex '>
                                    <IoDocumentTextOutline className='fs-4 me-2' /> <p>Document</p>
                                </div>
                                <div className='d-flex '>
                                    <FaCamera className='fs-4 me-2' /> <p>Camera</p>
                                </div>
                                <div className='d-flex '>
                                    <IoIosContact className='fs-4 me-2' /> <p>Contact</p>
                                </div>
                                <div className='d-flex '>
                                    <IoLocation className='fs-4 me-2' /> <p>Location</p>
                                </div>
                            </div>
                        )}

                        <div className='messageInput mb-2'>
                            <div className='input'>
                                <div onClick={addd}>{iconaddcansl}</div>

                                <input type='text' placeholder='Message' value={Message} onChange={(e) => Messagef(e)} />
                                <ion-icon name='attach-outline' className='deg45'></ion-icon>
                                <FaCamera className='me-1' />
                            </div>
                            <div className='mic' onClick={() => Send(Message, selectedImage, d)}>
                                {sendicon ? <IoMdSend /> : <MdKeyboardVoice />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
