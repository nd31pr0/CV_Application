import {useState} from 'react';

function Practical() {
    const [pract, setPract] = useState({companyName:'', positionTitle:'', jobRespo:'', startDate:'', endDate:''});
    const handlePract = (e) => {
        const {name, value} = e.target;
        setPract({...pract, [name]: value})
    }
    return (
    <>
        <h2>practical Experience Section</h2>
        <input type='text' name='companyName' placeholder='enter company name' onChange={handlePract} />
        <input type='text' name='postionTitle' placeholder='enter position title' onChange={handlePract} />
        <input type='textarea' name='jobRespo' placeholder='enter Job Responsibility' onChange={handlePract} />
        <input type='date' name='startDate' placeholder='enter start date' onChange={handlePract}/>
        <input type='date' name='endDate' placeholder='enter endDate' onChange={handlePract}/>
    </>
  )
}

export default Practical