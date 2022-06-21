import React, { useState } from 'react'
import { UilSearch, UilLocationPoint, UilFahrenheit, UilCelsius } from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {

  const [city, setCity] = useState("");
  const handSearchClick = () => {
    if (city !== '') setQuery({q: city})
  }

  const HandleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon
        });
      })
    }
  }

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

            <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)} 
            type="text" 
            placeholder='Search for city...'
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' />

            <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'
            onClick={handSearchClick}/>

            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' 
            onClick={HandleLocationClick}/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-light' onClick={handleUnitsChange}>
            <UilCelsius size={18} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
            </button>
            <p className='text-l text-white mx-1'>|</p>
            <button name='imperial' className='text-xl text-white font-light' onClick={handleUnitsChange}>
                <UilFahrenheit size={18} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
            </button>
        </div>
    </div>
  )
}

export default Inputs