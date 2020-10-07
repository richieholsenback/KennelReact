import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = (props) => {
    const { addLocation } = useContext(LocationContext)

    const name = useRef(null)
    const address = useRef(null)

    const constructNewLocation = () => {
        addLocation({
            name: name.current.value,
            address: address.current.value
        })
            .then(() => history.push("/locations"))
    }

    const history = useHistory()

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="location name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Location address: </label>
                    <input type="text" id="locationAddress" ref={address} required autoFocus className="form-control" placeholder="location address" />
                </div>
            </fieldset>
            <button type="button"
                onClick={evt => {
                    
                    constructNewLocation()
                }}
                className="btn btn-primary">
                Save Location
            </button>
        </form>
    )
}