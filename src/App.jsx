import React, {useContext} from 'react';
import { useBooking} from './BookingContext';
import { FaCheckCircle, FaCar, FaWrench } from 'react-icons/fa';
import { BsFillMoonFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import Select from './Components/Select';
import StationCard from './Components/StationCard';
import LoadingSpinner from './Components/LoadingSpinner';
import "./App.css"
import { useEffect, useState } from 'react';
import Stations from './Components/Stations';
import STATIONS from "./stations.json"
import SERVICES from "./services.json"
import CARTYPES from "./carTypes.json"

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isWaiting, setIsWaiting] = useState(true)
  const {carTypes, services, stations, showSuccess, setShowSuccess, theme, setTheme, selectedOptions, setSelectedOptions, bookingDetails, setBookingDetails} = useBooking()
  useEffect(()=>{
    if(selectedOptions.carType && selectedOptions.repairService){
      setIsLoading(true)
      setIsWaiting(false)
      setTimeout(()=>{
        setIsLoading(false)
      }, [2000])
    }else{
      setIsWaiting(true)
    }
  }, [selectedOptions])

  function handleNew(){
    setShowSuccess(false)
    setSelectedOptions({carType:"", repairService:""})
  }


  return (
      <div className={`relative min-h-screen ${theme==="light"?"bg-gradient-to-br from-gray-100 to-gray-200":"bg-gradient-to-br from-gray-500 to-gray-600"} flex items-center justify-center p-4 sm:p-6 transition-bg duration-300 ease-in-out`}>
      <span className='absolute cursor-pointer top-5 right-5 w-6 h-6'>
        {
          theme==="dark" ? <BsFillMoonFill onClick={()=>{setTheme("light")}} className='min-h-full min-w-full text-white' />:
          <IoMdSunny onClick={()=>{setTheme("dark")}} className='min-h-full min-w-full' />
        }
        </span>
      <div className={`mt-10 md:mt-0 max-w-3xl w-full ${theme==="light"?"bg-white text-gray-800":"bg-gray-800 text-white"} rounded-2xl shadow-2xl p-6 sm:p-8 transition-bg duration-300 ease-in-out`}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center  mb-8 tracking-tight">
          Balanceè Repair Booking
        </h1>

        {showSuccess ? (
          <div className="text-center animate-fade-in">
            <FaCheckCircle className="text-teal-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Booking Confirmed!</h2>
            <p className=" mb-6 text-lg">
              Your appointment at <strong>{bookingDetails.chosenStation}</strong> is set for{' '}
              <strong>{bookingDetails.slot}</strong>.
            </p>
            <button onClick={handleNew} className="bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200 cursor-pointer">
              Book Another
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Select label="Car Type" onChange={(e)=>{setSelectedOptions({...selectedOptions, carType:e.target.value})}} options={carTypes} value={selectedOptions.carType} icon={FaCar} />
              <Select label="Repair Service" onChange={(e)=>{setSelectedOptions({...selectedOptions, repairService:e.target.value})}} options={services} value={selectedOptions.repairService} icon={FaWrench} />
            </div>

            {isLoading ? (
              <div className="text-center py-8">
                <LoadingSpinner />
                <p className="mt-4 text-lg">Loading stations...</p>
              </div>
            ) : isWaiting ? (
              <div className="text-center py-8">
                <p className="text-lg">Please input the required details</p>
              </div>
            ) : (
              <Stations />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;