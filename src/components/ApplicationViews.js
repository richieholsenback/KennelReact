import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from './customer/CustomerProvider'
import { CustomerList } from './customer/CustomerList'
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetails"
import { EmployeeDetail } from "./employee/EmployeeDetail"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path='/employees/create'>
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            <LocationProvider>
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
            </AnimalProvider>

            <LocationProvider>
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>

            <EmployeeProvider>
                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>
            </EmployeeProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                    <Route path="/animals/edit/:animalId(\d+)">
                        <AnimalForm />
                    </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}