import React, { useState } from 'react'

export default function Modeldemo(props) {



    // const [Name, setName] = useState("")
    // const [list, setlist] = useState([])


    // const [Phone, setPhone] = useState("")
    // const [Phonelist, setPhonelist] = useState([])

    // const handalenter = (e) => {
    //     if (e.keyCode === 13) {
    //         add(Name)
    //         setName("")
    //     }
    // }

    // const add = (text, p) => {
    //     if (Name !== "") {
    //         setlist([...list, text])
    //         setName("")

    //         setPhonelist([...Phonelist, p])
    //         setPhone("")
    //     }

    // }

    // const delet = (e) => {
    //     let newlist = [...list]
    //     newlist.splice(e, 1)
    //     setlist([...newlist])

    //     let newphonlist = [...Phonelist]
    //     newphonlist.splice(e, 1)
    //     setPhonelist(...newphonlist)


    // }

    return (
        <div>
            <button type="button" className="btn btn-info text-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add +
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <input type="text" className='mx-2 my-2' value={props.id} onChange={e => { props.setid(e.target.value) }} placeholder='Id' />


                            <input type="text" className='mx-2 my-2' value={props.Name} onChange={e => {
                                props.setName(e.target.value)
                            }} placeholder='Name' onKeyDown={props.handalenter} />


                            <input type="text" className='mx-2 my-2' value={props.Phone} onChange={e => { props.setPhone(e.target.value) }} placeholder='Phone number' />

                            <input type="text" className='mx-2 my-2' value={props.emali} onChange={e => { props.setemali(e.target.value) }} placeholder='Email' />



                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-info text-light" data-bs-dismiss="modal" onClick={() => {
                                props.add(props.Name, props.Phone, props.id, props.emali)

                            }} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
