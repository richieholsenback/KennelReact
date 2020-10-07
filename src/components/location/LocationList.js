import React, { useContext, useEffect } from "react"
import { LocationCard } from './Location'
import { LocationContext } from './LocationProvider'
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationList = () => {
  // This state changes when `getlocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])

const history = useHistory()
  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => { history.push("/locations/create") }}>
        Add Location
      </button>
      <div className="locations">
        {console.log("locationList: Render")}
        {
          locations.map(location => {
            return <LocationCard key={location.id} location={location} />
          })
        }
      </div>
    </>
  )
}