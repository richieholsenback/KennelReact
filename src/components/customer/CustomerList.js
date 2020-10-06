import React, { useContext, useEffect } from "react"
import {CustomerCard} from './Customer'
import {CustomerContext} from './CustomerProvider'
import "./Customer.css"
import {useHistory} from 'react-router-dom'

export const CustomerList = () => {
   // This state changes when `getAnimals()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		console.log("CustomerList: useEffect - getCustomers")
		getCustomers()
		
    }, [])

    const history = useHistory()

    return (	
      <>
        <h2>Customers</h2>
		<button onClick={() => {history.push("/customers/create")}}>
            Add Customer
        </button>
		<div className="customers">
		    {console.log("CustomerList: Render")}
        {
			customers.map(customer => {
				return <CustomerCard key={customer.id} customer={customer} />
			})
        }
        </div>
        </>
    )
}