import React, { useState } from 'react'



const Thermometer = (props) => {
    const [goal, setGoal] = useState(props.goal)
    const [raised, setRaised] = useState(props.raised)
    const [value, setValue] = useState(1)
    const [modal, setModal] = useState(false)
    const getProgressBarWidth = (amountRaised, goal) => {
        // if amount raised is LESS than our goal, then RETURN (amountRaised/goal *100) .toFixed (1)
        if ((amountRaised /goal) * 100 <= 100) {
            return ((amountRaised /goal) * 100).toFixed(1)
        } 
        // if our goal is reached, return 100
        else {
            return 100
        }
    };
        const handleChange = (event) => {
            setValue(event.target.value)
        };
        const handleDonation = () => {
            setRaised(raised + value);
            //handleModal()
        };

        
    return (
        <div>
            <>
            <div className="thermometer">
                <div className="thermometer-raised">${props.raised.toFixed(2)}</div>
                <div className="progress">
                    <div className="progress-labels">
                        <div>0%</div>  
                        <div>RAISED</div>      
                        <div>100%</div>    
                    </div>
                    <div className="progress-bar">
                        <div 
                            className="progress-inner" style={{width: `${getProgressBarWidth(raised, goal)}%`}}></div>
                    </div>
                </div>
            </div>
            <form className="donation-group">
                <label>
                    <input type="radio" checked={value === 1} onChange={handleChange} value={1} /> $1
                </label>
                <label>
                    <input type="radio" checked={value === 5} onChange={handleChange} value={1} /> $5
                </label>
                <label>
                    <input type="radio" checked={value === 20} onChange={handleChange} value={1} /> $20
                </label>                
            </form>
            <form className="donation-group">
                <label>
                    <input type="radio" checked={value === 50} onChange={handleChange} value={1} /> $50
                </label>
                <label>
                    <input type="radio" checked={value === 100} onChange={handleChange} value={1} /> $100
                </label>
                <label>
                    <input type="radio" checked={value === 500} onChange={handleChange} value={1} /> $500
                </label>                
            </form>
            <button onClick={() => handleDonation()} className="give-btn">PLEASE GIVE</button>
            </>
        </div>
    )
}

export default Thermometer

