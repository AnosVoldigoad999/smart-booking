import { useState } from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useBooking } from '../BookingContext';
import {motion} from "framer-motion"
import { fromBottomToTop, others } from './Animation';
const StationCard = ({ station, delay}) => {
  const {theme, bookingDetails, setBookingDetails, setShowSuccess} = useBooking()  
  const [chosenSlot, setChosenSlot] = useState("")
    function handleBook(){
        setBookingDetails({chosenStation:station.name, slot:chosenSlot})
        setShowSuccess(true)
    }

    function handleDate(id){
        const newId = Number(id) //convert id to number
        station.timeSlots.forEach(slot=>{
          if(newId===slot.id){
            setChosenSlot(slot) //set chosenSlot to the matching slot
          }
        })
    }
 return <motion.div
 initial={fromBottomToTop.initial}
 animate={fromBottomToTop.animate}
 transition={{...others.transition, delay:delay}}
 viewport={others.viewport}
 className={`${theme==="light"?"bg-white":"bg-gray-700"} p-6 rounded-xl shadow-lg`}>
    <h3 className={`text-lg font-semibold ${theme==="light"?"text-gray-800":"text-white"} flex items-center mb-2`}>
      <FaMapMarkerAlt className="mr-2 text-teal-500" /> {station.name}
    </h3>
    <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-400"} mb-4`}>{station.location}</p>
    <div className="mb-4">
      <label className={`block text-sm font-medium ${theme==="light"?"text-gray-700":"text-gray-200"} mb-2 flex items-center`}>
        <FaClock className="mr-2 text-teal-500" /> Available Time Slots
      </label>
      <select
      onChange={(e)=>{handleDate(e.target.value);}}
        className={`w-full p-3 ${theme==="light"?"bg-gray-50 text-gray-800 border-gray-200":"bg-gray-800 text-gray-50 border-gray-500"} border-2  rounded-lg focus:border-teal-500  transition-all duration-200 outline-none appearance-none cursor-pointer`}
      >
        <option value="">Select a time slot</option>
        {station.timeSlots.map((slot, index) => (
          <option key={`${slot.time}${index}`} value={slot.id}>
              {slot.time}
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
  </motion.div>
};

export default StationCard;