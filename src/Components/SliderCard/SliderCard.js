import React from 'react';
import "@/Components/SliderCard/SliderStyles.css"
const SliderCard = ({ image, title, description,icon }) => {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">

                    <div className="">
                        <div className="card-body">
                            <div className='d-flex'>


                                <span>
                                    <img src={image} className="img-fluid rounded-start" alt="..." />
                                </span>
                                <span>

                                    <h5 className="card-title">{title}</h5>
                                </span>
                            </div>
                            <p className="card-text">{description}</p>
                            <div className="float-end">
                                <img src={icon} className='icon' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderCard