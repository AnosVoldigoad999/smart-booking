import React, {createContext, useContext, useState, useEffect} from "react"

const BookingContext = createContext()

export function BookingProvider({children}){
  const [showSuccess, setShowSuccess] = useState(false)
  const carTypes = ["Sedan", "SUV", "Truck", "Hatchback"]
  const services = ["Oil Change", "Tire Rotation", "Brake Repair", "Engine Diagnostic"]
  const stations = [
    {
      "id": 1,
      "name": "Downtown Auto",
      "location": "123 Main St",
      "timeSlots": ["2025-05-18T09:00:00", "2025-05-18T11:00:00"],
      "carTypes": ["Sedan", "SUV"],
      "services":["Oil Change", "Tire Rotation", "Brake Repair", "Engine Diagnostic"]
    },
    {
      "id": 2,
      "name": "Westside Garage",
      "location": "345 Bala Ave",
      "timeSlots": ["2025-05-18T10:00:00"],
      "carTypes": ["Sedan", "SUV"],
      "services":["Oil Change", "Tire Rotation", "Brake Repair", "Engine Diagnostic"]
    },
    {
      "id": 3,
      "name": "Eastside Garage",
      "location": "298 Rep St",
      "timeSlots": ["2025-05-18T10:00:00"],
      "carTypes": ["Truck"],
      "services":["Oil Change", "Tire Rotation", "Brake Repair", "Engine Diagnostic"]
    },
    {
      "id": 4,
      "name": "Southside Garage",
      "location": "982 Book St",
      "timeSlots": ["2025-05-18T10:00:00"],
      "carTypes": ["Truck"],
      "services":["Oil Change", "Tire Rotation", "Brake Repair", "Engine Diagnostic"]
    },
    {
      "id": 5,
      "name": "Northside Garage",
      "location": "247 Type Ave",
      "timeSlots": ["2025-05-18T10:00:00"],
      "carTypes": ["Hatchback"],
      "services":["Oil Change", "Brake Repair", "Engine Diagnostic"]
    }
  ]
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