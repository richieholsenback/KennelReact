import React from "react"
import "./Employee.css"

export const EmployeeCard = () => (
    <>
        <section className="employee">
            <h3 className="employee__name">Kenny Kawaguchi</h3>
            <div className="employee__workplace">Camden Acres</div>
        </section>
        <section className="employee">
            <h3 className="employee__name">Spicy Pete</h3>
            <div className="employee__workplace">Grocey Aisles Near You</div>
        </section>
        <section className="employee">
            <h3 className="employee__name">Clarissa from Clarissa Explains it All</h3>
            <div className="employee__workplace">Norf Norf</div>
        </section>
    </>
)