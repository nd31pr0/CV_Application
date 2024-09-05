import {useState} from 'react'
const Education = () => {
    const [edu, setEdu] = useState({school:"", title:"", date:""})
    const handleInput = (e) => {
        const {name, value} = e.target
        setEdu({...edu, [name]: value})
    }
    return (
        <div>
            <h2>Education Section</h2>
            <input type="text" placeholder="Enter School" name="school" onChange={handleInput}/>
            <input type="text" placeholder="Enter course Title" name="title" onChange={handleInput}/>
            <input type="date" placeholder="Enter date of study" name="date" onChange={handleInput}/>
        </div>
    );
}
export default Education;