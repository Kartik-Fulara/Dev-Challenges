import React from 'react'
import "./FilterGroupOption.scss";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiOutlineSearch, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoLocationSharp, IoClose } from "react-icons/io5";
import Offcanvas from "react-bootstrap/Offcanvas";

const givenCities = [
    "Helsinki",
    "Turku",
    "Oulu",
    "Vaasa",
]



const FilterGroupOption = ({ city, guests, setGuests, setCity }) => {

    const [show, setShow] = React.useState(false);
    const [tempCity, setTempCity] = React.useState(city);

    const [adults, setAdults] = React.useState(guests.adults);
    const [children, setChildren] = React.useState(guests.children);

    const [locORguest, setLocOrGuest] = React.useState("location");


    const tempGuests =
        [{
            info: {
                type: "Adults",
                age: "Ages 13 or above",
            },
            guests: adults,
            setGuests: setAdults,
        }, {
            info: {
                type: "Children",
                age: "Ages 2-12",
            },
            guests: children,
            setGuests: setChildren,
        }]



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFilterSearch = () => {
        if (tempCity !== city) {
            setCity(tempCity);
        }

        if (adults !== guests.adults || children !== guests.children) {
            setGuests({
                adults: adults,
                children: children,
            })
        }

        handleClose()


    }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="top" className='windBnd__filter_offcanvas  d-md-flex d-none desktop_tablet'>
                <section className='windBnd__offcanvas_wrapper  '>
                    <div className="windBnd__filter_container offcanvas_group">
                        <div className={`windBnd_filter_btn ${locORguest === "location" ? "selected" : ""}`} onClick={() => {
                            console.log("clicked")
                            setLocOrGuest("location")
                        }}>
                            <span className='filter_title'>location</span>
                            <span className={`country_city ${tempCity !== "" ? 'have_location' : 'no_location'}`}>{tempCity !== "" ? `${tempCity}, Finland` : 'Location'}</span>
                        </div>
                        <div className="divider"></div>
                        <div className={`windBnd_filter_btn ${locORguest !== "location" ? "selected" : ""}`} onClick={() => setLocOrGuest("guests")}>
                            <span className='filter_title'>guests</span>
                            <span className={`add_guests ${(adults + children) <= 0 ? 'no_guests' : "have_guests"}`}>{(adults + children) <= 0 ? "Add" : (adults + children)} guests</span>
                        </div>
                        <div className="divider"></div>
                        <div className="windBnd_filter_btn search_btn_wrapper">
                            <button onClick={handleFilterSearch} className='search_btn'>
                                <AiOutlineSearch />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>

                    <div className="windBnd__filter_container offcanvas_options h-100">
                        <div className="windBnd_filter_btn  h-100">
                            <ul className={`list-unstyled locations country_city_choice_container ${locORguest === "location" ? "show" : ""} d-flex`}>
                                {
                                    givenCities.map((city, index) => (
                                        <li key={index} className={`location z-0 ${tempCity === city ? "loca_selected" : ""}`} >
                                            <div onClick={() => setTempCity(city)} className="w-100">
                                                <IoLocationSharp />
                                                <span className='location_name'>
                                                    {city}, Finland
                                                </span>
                                            </div>
                                            {tempCity === city &&
                                                <IoClose className='z-10' onClick={() => setTempCity("")} />
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="windBnd_filter_btn  h-100">
                            <div className={` total_guests_container ${locORguest !== "location" ? "show" : ""} d-flex flex-column justify-content-between h-100 w-100 gap-4`}>
                                {
                                    tempGuests.map((guest, index) => (

                                        <div className="info_wrapper" key={index}>
                                            <div className="info">
                                                <span className='info_title'>{guest.info.type}</span>
                                                <span className='info_age'>{guest.info.age}</span>
                                            </div>
                                            <div className="guests">
                                                <button className='guests_btn minus' onClick={() => guest.setGuests(guest.guests <= 0 ? 0 : guest.guests - 1)}>
                                                    <AiOutlineMinus />
                                                </button>
                                                <span className='guests_count'>{guest.guests}</span>
                                                <button className='guests_btn plus' onClick={() => guest.setGuests(guest.guests >= 5 ? 5 : guest.guests + 1)}>
                                                    <AiOutlinePlus />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </section>
            </Offcanvas>

            <Offcanvas show={show} onHide={handleClose} placement="top" className='windBnd__filter_offcanvas p-0 d-md-none d-flex flex-column justify-content-between align-items-center mobile'>
                <Offcanvas.Header closeButton className='w-100 d-flex justify-content-between align-items-center'>
                    <Offcanvas.Title className="h6">Edit your search</Offcanvas.Title>
                </Offcanvas.Header>
                <section className='windBnd__offcanvas_wrapper d-flex flex-column justify-content-between align-items-center h-100 w-100  pb-3'>

                    <div className='d-flex flex-column w-100 gap-3 px-2'>
                        <div className="windBnd__filter_container offcanvas_group flex-column">
                            <div className={`windBnd_filter_btn w-100 ${locORguest === "location" ? "selected" : ""}`} onClick={() => {
                                console.log("clicked")
                                setLocOrGuest("location")
                            }}>
                                <span className='filter_title'>location</span>
                                <span className={`country_city ${tempCity !== "" ? 'have_location' : 'no_location'}`}>{tempCity !== "" ? `${tempCity}, Finland` : 'Location'}</span>
                            </div>
                            <div className="divider w-100"></div>
                            <div className={`windBnd_filter_btn w-100 ${locORguest !== "location" ? "selected" : ""}`} onClick={() => setLocOrGuest("guests")}>
                                <span className='filter_title'>guests</span>
                                <span className={`add_guests ${(adults + children) <= 0 ? 'no_guests' : "have_guests"}`}>{(adults + children) <= 0 ? "Add" : (adults + children)} guests</span>
                            </div>
                        </div>

                        <div className="windBnd__filter_container offcanvas_options h-100">
                            <div className={`w-100 windBnd_filter_btn  h-100 country_city_choice_container ${locORguest === "location" ? "show" : ""} `}>
                                <ul className={`w-100 list-unstyled locations `}>
                                    {
                                        givenCities.map((city, index) => (
                                            <li key={index} className={`location z-0 ${tempCity === city ? "loca_selected" : ""}`}>
                                                <div onClick={() => setTempCity(city)} className="w-100">
                                                    <IoLocationSharp />
                                                    <span className='location_name'>
                                                        {city}, Finland
                                                    </span>
                                                </div>
                                                {tempCity === city &&
                                                    <IoClose className='z-10' onClick={() => setTempCity("")} />
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className={`windBnd_filter_btn  h-100  total_guests_container ${locORguest !== "location" ? "show" : ""}`}>
                                <div className={`d-flex  flex-column justify-content-between h-100 w-100 gap-4`}>
                                    {
                                        tempGuests.map((guest, index) => (

                                            <div className="info_wrapper" key={index}>
                                                <div className="info">
                                                    <span className='info_title'>{guest.info.type}</span>
                                                    <span className='info_age'>{guest.info.age}</span>
                                                </div>
                                                <div className="guests">
                                                    <button className='guests_btn minus' onClick={() => guest.setGuests(guest.guests <= 0 ? 0 : guest.guests - 1)}>
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <span className='guests_count'>{guest.guests}</span>
                                                    <button className='guests_btn plus' onClick={() => guest.setGuests(guest.guests + 1)}>
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <button onClick={handleFilterSearch} className='search_btn'>
                        <AiOutlineSearch />
                        <span>Search</span>
                    </button>

                </section>


            </Offcanvas>

            <ButtonGroup className='desktop_btn_group windBnd__filter_container btn_group ' aria-label="Basic windBnd_filter">
                <Button onClick={() => {
                    setLocOrGuest("location")
                    handleShow()
                }} className={`windBnd__filter_btn country_city ${city !== "" ? 'have_location' : 'no_location'}`}>{
                        city !== "" ? `${city}, Finland` : 'Location'
                    }</Button>
                <Button
                    onClick={() => {
                        setLocOrGuest("guests")
                        handleShow()
                    }}
                    className={`windBnd__filter_btn add_guests ${(guests.adults + guests.children) <= 0 ? 'no_guests' : "have_guests"}`}>{(guests.adults + guests.children) <= 0 ? "Add" : (guests.adults + guests.children)} guests</Button>
                <Button
                    onClick={() => {
                        setLocOrGuest("location")
                        handleShow()
                    }}
                    className='windBnd__filter_btn search'>
                    <AiOutlineSearch />
                </Button>
            </ButtonGroup>

            <ButtonGroup vertical className='mobile_btn_group windBnd__filter_container btn_group ' aria-label="Basic windBnd_filter">
                <Button onClick={() => {
                    setLocOrGuest("location")
                    handleShow()
                }} className='windBnd__filter_btn country_city'>{
                        city !== "" ? `${city}, Finland` : 'Location'
                    }</Button>
                <Button
                    onClick={() => {
                        setLocOrGuest("guests")
                        handleShow()
                    }}
                    className={`windBnd__filter_btn add_guests ${(guests.adults + guests.children) <= 0 ? 'no_guests' : "have_guests"}`}>{(guests.adults + guests.children) <= 0 ? "Add" : (guests.adults + guests.children)} guests</Button>
                <Button
                    onClick={() => {
                        setLocOrGuest("location")
                        handleShow()
                    }}
                    className='windBnd__filter_btn search'>
                    <AiOutlineSearch />
                </Button>
            </ButtonGroup>
        </>
    )
}

export default FilterGroupOption;


