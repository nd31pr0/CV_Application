import {useState} from 'react';

const GeneralInfo = () => {
    const [info, setInfo] = useState({name: "", email: "", phone: ""})
    const handleChange = (e) => {
       const {name, value} = e.target
       setInfo({...info, [name]: value})
    };

    return (
        <div>
            <h2>GeneralInfo</h2>
            <input type='text' name='name' placeholder='Name' onchange={handleChange}/>
            <input type='email' name='email' placeholder='Email' onchange={handleChange} />
            <input type='tel' name='phone' placeholder='Enter Phone Number' onchange={handleChange}/>
        </div>

    )
}
export default GeneralInfo;