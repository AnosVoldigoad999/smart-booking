import React, {createContext, useContext, useState, useEffect} from "react"
import { parse, isAfter } from 'date-fns';
import STATIONS from "./stations.json"
import CARTYPES from './carTypes.json'
import SERVICES from './services.json'

const BookingContext = createContext()

export function BookingProvider({children}){
  const [showSuccess, setShowSuccess] = useState(false)
  const carTypes = CARTYPES
  const services = SERVICES
  const stations = STATIONS.map(station=>{
    let slots = station.timeSlots
    // Map over each time slot to check if it's in the past or future
    slots = slots.map(slot=>{
      const time = slot.time  // Extract the time string (e.g., "9:00 AM")
      const now = new Date()  // Get current date and time
      const parsedTime = parse(time, "hh:mm a", new Date()) // Parse the slot time into a Date object
      
      // Check if the current time is after the slot time
      if(isAfter(now, parsedTime)){
        return {...slot, today:false}
      }else{
        return {...slot, today:true}
      }
    })

    // Return the updated station object with the new timeSlots array
    return {...station, timeSlots:slots}
  })
   const [theme, setTheme] = useState(()=>{
      const gotten = JSON.parse(localStorage.getItem("balancee-repair-theme"))
      if(gotten){
        return gotten
      }else{
        return "light"
      }
    })
    const [selectedOptions, setSelectedOptions] = useState({carType:"", repairService:""})
    const [bookingDetails, setBookingDetails] = useState({chosenStation:"", slot:""})
    const [showEmpty, setShowEmpty] = useState(false)
    useEffect(()=>{
      localStorage.setItem("balancee-repair-theme", JSON.stringify(theme))
    }, [theme])
  const values = {showSuccess, 
    setShowSuccess, 
    carTypes, 
    stations, 
    services, 
    theme, 
    setTheme, 
    selectedOptions, 
    setSelectedOptions, 
    bookingDetails, 
    setBookingDetails, 
    showEmpty, 
    setShowEmpty}
  return <BookingContext.Provider value={values}>
    {children}
  </BookingContext.Provider>
}

export function useBooking () {
  return useContext(BookingContext)
}