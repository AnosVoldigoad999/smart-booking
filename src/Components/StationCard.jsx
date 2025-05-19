import { useState } from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const StationCard = ({ theme, station, bookingDetails, setBookingDetails, setShowSuccess}) => {
    const [chosenSlot, setChosenSlot] = useState("")
    function handleBook(){
        setBookingDetails({chosenStation:station.name, slot:chosenSlot})
        setShowSuccess(true)
    }

    function handleDate(rawDate){
        const date = new Date(rawDate).toLocaleTimeString([], {day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit"})
        setChosenSlot(date)
    }
 return <div className={`${theme==="light"?"bg-white":"bg-gray-700"} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
    <h3 className={`text-lg font-semibold ${theme==="light"?"text-gray-800":"text-white"} flex items-center mb-2`}>
      <FaMapMarkerAlt className="mr-2 text-teal-500" /> {station.name}
    </h3>
    <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-400"} mb-4`}>{station.location}</p>
    <div className="mb-4">
      <label className={`block text-sm font-medium ${theme==="light"?"text-gray-700":"text-gray-200"} mb-2 flex items-center`}>
        <FaClock className="mr-2 text-teal-500" /> Available Time Slots
      </label>
      <select
      onChange={(e)=>{handleDate(e.target.value)}}
        className={`w-full p-3 ${theme==="light"?"bg-gray-50 text-gray-800 border-gray-200":"bg-gray-800 text-gray-50 border-gray-500"} border-2  rounded-lg focus:border-teal-500  transition-all duration-200 outline-none appearance-none cursor-pointer`}
      >
        <option value="">Select a time slot</option>
        {station.timeSlots.map((slot) => (
          <option key={slot} value={slot}>
            {new Date(slot).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </option>
        ))}
      </select>
    </div>
    <button
    onClick={handleBook}
      className={`w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200 ${theme==="light"?"disabled:bg-gray-300 disabled:text-gray-500":"disabled:bg-gray-500 disabled:text-gray-200"} disabled:cursor-not-allowed cursor-pointer`}
      disabled={!chosenSlot}
    >
      Book Now
    </button>
  </div>
};

export default StationCard;