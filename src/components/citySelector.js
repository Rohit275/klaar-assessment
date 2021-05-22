import React from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'

const Cities = [
    {label: "Coimbatore", value: 'COIMBATORE'},
    {label: "Bangalore", value: 'BANGALORE'},
    {label: "Mumbai", value: 'MUMBAI'},
    {label: "Delhi", value: 'DELHI'},
    {label: "Hyderabad", value: 'HYDERABAD'},
];


function citySelector({city, setCity}) {
    const handleChange = (e) => {
        setCity(e.value);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <Select 
                        options={Cities}
                        placeholder="Select the city"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
         </div> 
        
    )
}

export default citySelector
