import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import Modeldemo from './Modeldemo'
import Editmodel from './Editmodel'
import { json } from 'react-router-dom'

export default function Tebla() {
    // const [sname, setsname] = useState("")

    const [Name, setName] = useState("")

    const localdata = () => {
        const lisdts = localStorage.getItem("dixeet")
        if (lisdts) {
            return JSON.parse(lisdts)
        }
        else {
            return []
        }

    }
    const [list, setlist] = useState(localdata())

    const [id, setid] = useState("")

    const [emali, setemali] = useState()


    const [Phone, setPhone] = useState("")
    const [Phonelist, setPhonelist] = useState([])

    const [Search, setSearch] = useState("")

    const handalenter = (e) => {
        if (e.keyCode === 13) {
            add(Name)
            setName("")
        }
    }

    const add = (name, Phone, id, emal) => {
        if (Name !== "") {
            setlist([...list, { name: name, Id: id, Phone: Phone, email: emal }])
            setName("")
            setPhone("")
            setid("")
            setemali("")

        }
    }

    const delet = (e) => {
        setlist((prev) => prev.filter(f => f.Id !== e))
    }


    const data = { list, setlist }
    useEffect(() => {
        localStorage.setItem("dixeet", JSON.stringify(list));
    }, [list]);


    return (
        <div>
            <Navbar />

            <div className='container d-flex mt-4'>
                <Modeldemo delet={delet} add={add} handalenter={handalenter} Name={Name} setName={setName} Phone={Phone} setPhonelist={setPhonelist} setPhone={setPhone} list={list} Phonelist={Phonelist} id={id} setid={setid} emali={emali} setemali={setemali} />
                <form className="d-flex mx-3" style={{ width: "300px" }}>
                    <input className="form-control me-2" placeholder="Search" onChange={e => setSearch(e.target.value)} />
                </form>
            </div>
            <div className="container mt-2 " style={{ height: "400px", overflow: "scroll" }}>

                <div className="row  position-sticky top-0" style={{ width: "1200px", overflow: "scroll", height: "50px", }}>
                    <div className="col  border py-2 text-center text-light bg-info rounded fs-5 " style={{ width: "100px" }}>
                        Edit
                    </div>
                    <div className="col  border py-2 text-center text-light bg-info rounded fs-5 " style={{ width: "100px" }}>
                        Id
                    </div>

                    <div className="col  border py-2 text-center text-light bg-info rounded fs-5 " style={{ width: "300px" }}>
                        Name
                    </div>
                    <div className="col  border py-2 text-center text-light bg-info rounded fs-5 " style={{ width: "300px" }}>
                        Phone number
                    </div>
                    <div className="col  border py-2 text-center text-light bg-info rounded fs-5 " style={{ width: "300px" }}>
                        Email
                    </div>
                    <div className="col  border text-center py-2 text-light bg-info rounded fs-5 " style={{ width: "100px" }}>
                        Delete
                    </div>
                </div>





                {list.filter(f => f.name.toLowerCase().includes(Search.toLowerCase())).map((k, i) => {
                    return (


                        <div className=" row  " key={i} style={{ width: "1200px", overflow: "scroll", }}>
                            <div className="col  border py-2 text-center" >
                                <Editmodel e={k} index={i} data={data} style={{ width: "100px" }} />
                            </div>

                            <div className="col  border py-2 text-center" style={{ width: "100px" }} >
                                {k.Id}
                            </div>


                            <div className="col  border py-2 text-center" key={i} style={{ width: "300px" }}>
                                {k.name}
                            </div>


                            <div className="col  border py-2 text-center" key={i} style={{ width: "300px" }}>
                                {k.Phone}
                            </div>



                            <div className="col  border py-2 text-center" key={i} style={{ width: "300px" }}>
                                {k.email}
                            </div>


                            <div className="col  border py-2 text-center" style={{ width: "100px" }}>
                                <span><i className="fa-solid fa-trash" onClick={() => { delet(k.Id) }} ></i></span>
                            </div>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    )
}
