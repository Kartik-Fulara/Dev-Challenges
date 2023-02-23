import './App.scss'
import { useState, useEffect } from 'react';
import Logo from "./assets/logo.svg";
import stays from "./assets/stays.json";
import StaysCard from './components/Stays/StaysCard';

import FilterGroupOption from './components/FilterGroup/FilterGroupOption';

function App() {

  const [staysData, setStaysData] = useState(stays);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });
  const [city, setCity] = useState("");
  useEffect(() => {
    let filteredStays = stays;
    if (city) {
      filteredStays = filteredStays.filter((stay) => stay.city === city);
    }
    if (guests.adults + guests.children > 0) {
      filteredStays = filteredStays.filter((stay) => stay.maxGuests >= guests.adults + guests.children);
    }
    setStaysData(filteredStays);
  }, [city, guests])

  return (
    <main className='windBnb__main_container'>
      <header className='windBnb__header container'>
        <div className="row">
          <div className="col-sm-6 col-12 mb-3 windBnb__right_header">
            <img src={Logo} alt="windbnb logo" />
          </div>
          <div className="col-sm-6 col-12 my-3 d-flex justify-content-center justify-content-md-end windBnb__left_header">
            <FilterGroupOption city={city} setCity={setCity} guests={guests} setGuests={setGuests} />
          </div>
        </div>
      </header>
      <section className='w-100 overflow-auto'>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-sm-between flex-wrap gap-2 justify-content-center align-items-center">
              <span className='stays_in_location text-center'>Stays in {city !== "" ? city + ", Finland" : "Finland"}</span>
              <span className='no_of_stays text-center'>
                {staysData.length > 12 ? "12+" : staysData.length} stays
              </span>
            </div>
          </div>
          <div className="row my-4 ">
            {staysData.map((stay, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <StaysCard stay={stay} />
              </div>
            ))
            }

          </div>
        </div>
      </section>
      <footer className='d-flex justify-content-center align-items-center mb-3 w-100'>
        <span className="credit">created by Kartik Fulara - devChallenges.io</span>
      </footer>
    </main>
  )
}

export default App
