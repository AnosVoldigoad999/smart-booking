import React, { useEffect, useState } from 'react'
import StationCard from './StationCard'
import { useBooking } from '../BookingContext'
function Stations() {
    const {theme, 
        stations, 
        bookingDetails, 
        setBookingDetails, 
        setShowSuccess, 
        showEmpty, 
        setShowEmpty, 
        selectedOptions} = useBooking()
    const [availableStations, setAvailableStations] = useState(()=>{
        const newStations = stations.filter(station=>{
            const carTypes = station.carTypes //car types the station accepts
            const services = station.services //services the station offers
            let hasCar = false
            let hasService = false
            carTypes.forEach(car=>{
                if(car===selectedOptions.carType){
                    hasCar=true //if the station supports the car type, set hasCar to true
                }
            })
            services.forEach(service=>{
                if(service===selectedOptions.repairService){
                    hasService = true //if the station offers the service,  set hasService to true
                }
            })

            if(hasCar && hasService){ //add the station to the array only if it supports both the station and the car type
                return station
            }  
             
        })

        return newStations 
    })
    
  return (
    availableStations.length!=0? <div>
        <h2 className="text-xl font-semibold mb-4">Available Stations</h2>
         <div className="space-y-4">
            {availableStations.map((station) => (
            <StationCard theme={theme} setShowSuccess={setShowSuccess} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} key={station.id} station={station} />
            ))}
        </div>
    </div> : <div className="text-center py-8">
                <p className="text-lg">No stations found for this service.</p>
        </div>
  )
}

export default Stations