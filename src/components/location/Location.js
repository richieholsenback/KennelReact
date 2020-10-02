import React from "react"
import "./Location.css"

export const LocationCard = () => (
    <>
        <section className="location">
            <h3 className="location__name">Abandoned K-Mart</h3>
            <div className="location__address">Down the Way</div>
        </section>
        <section className="location">
            <h3 className="location__name">DNC</h3>
            <div className="location__address">Deleware, generally</div>
        </section>
    </>
)