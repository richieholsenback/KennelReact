import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Customer.css"
import { useHistory } from 'react-router-dom';

export const CustomerForm = (props) => {
    const { addCustomer } = useContext(CustomerContext)

    const name = useRef(null)
    const address = useRef(null)
    const history = useHistory()

    useEffect()

    const constructNewCustomer = () => {
        addCustomer({
            name: name.current.value,
            address: address.current.value
        })
            .then(() => history.pushState("/customers"))

    }



return (
    <form className="customerForm">
        <h2 className="customerForm__title">New Customer</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="customerName">Customer name:</label>
                <input type="text" id="customerName" ref={name} required autoFocus className="form-control" placeholder="customer name" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="customerAddress">Customer address:</label>
                <input type="text" id="customeraddress" ref={address} required autoFocus classAddress="form-control" placeholder="Customer address" />
            </div>
        </fieldset>
        <button type="button"
            onClick={evt => {

                constructNewCustomer()
            }}
            className="btn btn-primary">
            Save Customer
        </button>
    </form>
)
}