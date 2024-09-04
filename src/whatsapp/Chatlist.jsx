import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import "./whatsapp.css"
import List from '../List/Listmap'
import icon from "../Imd_icom"
import Me from '../List/Me'
import Dixeet from '../List/Dixeet'
import Bhagvat from '../List/Bhagvat'
import Jaytul from '../List/Jaytul'
import Nirav from '../List/Nirav'
import Rajesh from '../List/Rajesh'
import Tej from '../List/Tej'
import Virendr from '../List/Virendr'


export default function Chatlist(props) {
    const [first1, setfirst1] = useState(props.first)
    const [menu, setmenu] = useState(true)
    const [chatlistComponent, setChatlistComponent] = useState(<Me />);
    const [search, setsearch] = useState(true)
    const [searchlist, setsearchlist] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);

    const { BsThreeDotsVertical, FaCamera, FaSearch, FaArrowLeft, FaMessage, AiTwotoneInfoCircle } = icon;

    const listmenu = (selectedName) => {
        const selectedListItem = List.find(item => selectedName === item.name);

        if (selectedListItem.name === "Dixeet") {
            setChatlistComponent(<Dixeet name={selectedName} first1={first1} />);
            setmenu(false);
        }
        else if (selectedListItem.name === "Bhagvat") {
            setChatlistComponent(<Bhagvat name={selectedName} first1={first1} />);
            setmenu(false);
        }
        else if (selectedListItem.name === "Jaytul") {
            setChatlistComponent(<Jaytul name={selectedName} first1={first1} />);
            setmenu(false);
        }
        else if (selectedListItem.name === "Me") {
            setChatlistComponent(<Me name={selectedName} first1={first1} />);
            setmenu(false);
        }
        else if (selectedListItem.name === "Nirav") {
            setChatlistComponent(<Nirav name={selectedName} first1={first1} />);
            setmenu(false);
        }
        else if (selectedListItem.name === "Rajesh") {
            setChatlistComponent(<Rajesh name={selectedName} first1={first1} />);
            setmenu(false);
        }
        else if (selectedListItem.name === "Tej") {
            setChatlistComponent(<Tej name={selectedName} first1={first1} />);
            setmenu(false);
        }
        else if (selectedListItem.name === "Virendr") {
            setChatlistComponent(<Virendr name={selectedName} first1={first1} />);
            setmenu(false);
        }
    };

    const FaSearcha = () => {
        setsearch(false)
    }

    const searchlistf = (e) => {
        const naw = e.target.value
        setsearchlist(naw)
        // setsearch(true)
    }


    const handleFileChange = (e) => {
        const newfile = e.target.files[0]
        if (newfile) {
            const reader = new FileReader()
            reader.onload = () => {
                setSelectedImage(reader.result);
            }
            reader.readAsDataURL(newfile)
        }

    }
    return (
        <div>

            <div className='d-flex justify-content-center my-3'>
                {menu ? (<div className=''>

                    {search ? (
                        <div className='mx-3 mb-3 mt-0 pt-0 text-center d-flex align-items-center justify-content-between mx-3'>
                            <h4>Whatsapp</h4>
                            <div className='fiuchar d-flex align-items-center justify-content-between input'>
                                <FaSearch onClick={FaSearcha} />
                                <FaCamera />
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    ) : (
                        <div className='mb-3   mb-5 mt-0 pt-3 position-absolute top-0 bottom-100 start-50 translate-middle d-flex '>
                            <FaArrowLeft className='mt-2 me-2' onClick={() => setsearch(true)} />
                            <input className='seache' placeholder='  search' value={searchlist} onChange={(e) => searchlistf(e)} type="text" />
                        </div>
                    )}


                    <div>

                        {List.filter(f => f.name.toLocaleLowerCase().includes(searchlist.toLocaleLowerCase())).map((e) => {
                            return (
                                <div className='' >




                                    <div key={e.id} className='listname border-bottom bg-light  d-flex align-items-center justify-content-between'>
                                        <div className='dp mx-3 fs-3 text-light d-flex align-items-center justify-content-center bg-secondary' >{e.name.charAt(0)}</div>
                                        <div className=' mx-3 me-5 namew' onClick={() => listmenu(e.name)}> {e.name}</div>
                                        <div className=' info_mesej me-3 d-flex align-items-center justify-content-center'>1</div>


                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>) :
                    (chatlistComponent)}
            </div>
        </div>
    )
}
