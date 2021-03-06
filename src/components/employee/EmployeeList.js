import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()

  }, [])

  const history = useHistory()

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => { history.push("/employees/create") }}>
        Add Employee
      </button>
      <div className="employees">
        {/* {console.log("EmployeeList: Render")} */}
        {
          employees.map(employee => {
            return <EmployeeCard key={employee.id} location={employee.location.name} employee={employee} />
          })
        }
      </div>
    </>
  )
}