import React, { useState } from 'react'

export default function Editmodel(props) {

    const { list, setlist } = props.data

    const [id, setid] = useState(props.e.Id)
    const [name, setname] = useState(props.e.name)
    const [phone, setPhone] = useState(props.e.Phone)
    const [email, setemail] = useState(props.e.email)


    const Save = () => {
        const contact = { name: name, Id: id, Phone: phone, email: email }
        const data = [...list]
        data[props.index] = contact
        setlist(data)
    }

    return (
        <div>
            <button type="button" className="btn " data-bs-toggle="modal" data-bs-target={`#A${props.e.Id}`}>
                <i className="fa-solid fa-pen-to-square" ></i>
            </button>

            <div className="modal fade" id={`A${props.e.Id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className='mx-2 my-2' value={id} placeholder='Id' onChange={e => { setid(e.target.value) }} />


                            <input type="text" className='mx-2 my-2' value={name} placeholder='Name' onChange={e => { setname(e.target.value) }} onKeyDown={props.handalenter} />


                            <input type="text" className='mx-2 my-2' value={phone} onChange={e => { setPhone(e.target.value) }} placeholder='Phone number' />

                            <input type="text" className='mx-2 my-2' value={email} placeholder='Email' onChange={e => { setemail(e.target.value) }} />


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Save}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
