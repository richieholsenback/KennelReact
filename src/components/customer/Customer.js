import React from "react"
import "./Customer.css"

export const CustomerCard = () => (
    <>
        <section className="customer">
            <h3 className="customer__name">Dirty Mike</h3>
            <div className="customer__address">410 32nd Ave S</div>
        </section>
        <section className="customer">
            <h3 className="customer__name">Tina Turner</h3>
            <div className="customer__address">Ike's House</div>
        </section>
        <section className="customer">
            <h3 className="customer__name">Chyna Doll</h3>
            <div className="customer__address">WCW</div>
        </section>
        <section className="customer">
            <h3 className="customer__name">All-Star OF Andruw Jones</h3>
            <div className="customer__address">Turner Field</div>
        </section>
    </>
)