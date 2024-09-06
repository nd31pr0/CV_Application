import {useState} from 'react';
import PropTypes from 'prop-types';

const GeneralInfo = ({generalInfo, setGeneralInfo}) => {
    const [isEditing, setIsEditing] = useState(false)
    const handleChange = (e) => {
       const {name, value} = e.target
       setGeneralInfo({...generalInfo, [name]: value})
    };

    return (
        <>
            <h2>GeneralInfo section</h2>
            {isEditing? (
                <>
                    <input type='text' name='name' value={generalInfo.name} onChange={handleChange} placeholder='name'/>
                    <input type='text' name='email' value={generalInfo.email} onChange={handleChange} placeholder='email'/>
                    <input type='tel' name='phone' value={generalInfo.phone} onChange={handleChange} placeholder='phone'/>
                    <button onClick={()=>setIsEditing(false)}>Submit</button>
                </>
            ):(
                <>
                    <p>Name: {generalInfo.name}</p>
                    <p>Email: {generalInfo.email}</p>
                    <p>Phone: {generalInfo.phone}</p>
                    <button onClick={()=>setIsEditing(true)}>Edit</button>
                </>
            )}
            
        </>

    )
}
GeneralInfo.propTypes = {
    generalInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    setGeneralInfo: PropTypes.func.isRequired,};
export default GeneralInfo;