import React, { useContext, useEffect } from "react"
import { LocationCard } from './Location'
import { LocationContext } from './LocationProvider'
import "./Location.css"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"

export const LocationList = () => {
  // This state changes when `getlocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { animals, getAnimals } = useContext(AnimalContext)


  //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("LocationList: useEffect - getLocations")
    getLocations().then(getEmployees).then(getAnimals)

  }, [])

  const history = useHistory()
  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => { history.push("/locations/create") }}>Add Location</button>
      <div className="locations">
        {
          locations.map(location => {
            const locationEmployees = employees.filter(employee => {
              return employee.locationId === location.id
            })
            const locationAnimals = animals.filter(animal => {
              return animal.locationId === location.id
            })
            return <LocationCard
              key={location.id}
              location={location}
              employees={locationEmployees}
              animals={locationAnimals}
            />
          })
        }
      </div>
    </>
  )
}