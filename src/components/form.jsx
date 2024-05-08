import axios from "axios";
import { useState } from "react";
const Form = () => {
    const [user, setUser] = useState({
        firstName: '',
        secondName: '',
        email: '',
        number: '',
        gender: '',
        dob: '',
        postCode: '',
        location: '',
        password: ''

    })
    const [submitted, setSubmitted] = useState(false)


    async function submitForm(e) {
        e.preventDefault()
        setSubmitted(true)
        if (!user.firstName ||user.secondName || !checkEmailRegex() || !user.number || !user.postCode || !user.location || !user.gender || !user.dob ) {
            return (false)
        }
        try {
            const response = await axios.post(" http://localhost:8080/user", user)
            console.log(response.date);
            alert("Your form is successfully submitted")
        } catch (error) {
            alert("Error in submitting")
        }

    }

    const onChangefn = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const checkEmailRegex = () => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user.email)

    console.log(user.firstName, user.secondName, user.email, user.number, user.postCode, user.location, user.gender, user.dob, user.password)

    return (
        <div className="whiteframe">
            <form className="inframe" onSubmit={submitForm}>
                <div>
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" value={user.firstName} className="form-control" onChange={onChangefn} />
                    {(!user.firstName && submitted) && <label className="alert">First name is required</label>}
                </div>
                <div>
                    <label htmlFor="secondName" className="form-label">Second Name</label>
                    <input type="text" id="secondName" name="secondName" placeholder="Enter your second name" value={user.secondName} className="form-control" onChange={onChangefn} />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={user.email} className="form-control" onChange={onChangefn} />
                    {(!user.email && submitted) && <label className="alert">Email is required</label>}
                    {(user.email && submitted && !checkEmailRegex()) && <label className="alert">Email is incorrect</label>}

                </div>
                <div>
                    <label htmlFor="number" className="form-label">Phone Number</label>
                    <input type="number" id="number" name="number" placeholder="Enter your personal number" value={user.number} className="form-control" onChange={onChangefn} />
                    {(!user.number && submitted) && <label className="alert">Number is required</label>}
                </div>
                <div>
                    <label htmlFor="location" className="form-label">Location</label>
                    <select id="location" name="location" placeholder="Enter your current location" value={user.location} className="form-select" onChange={onChangefn}>
                        <option value="">Select</option>
                        <option value="palakkad">Palakkad</option>
                        <option value="ernakulam">Ernakulam</option>
                        <option value="kozhikode">Kozhikode</option>
                        <option value="wayanad">Wayanad</option>
                    </select>
                    {(!user.location && submitted) && <label className="alert">Location is required</label>}
                </div>
                <div>
                    <label htmlFor="postCode" className="form-label">Post Code</label>
                    <input type="number" id="postCode" name="postCode" placeholder="Enter your Postcode" value={user.postCode} className="form-control" onChange={onChangefn} />
                    {(!user.postCode && submitted) && <label className="alert">Post code is required</label>}
                </div>
                <div>
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <div>
                        <input type="radio" id="female" name="gender" value={user.gender} className="form-check-input" onChange={onChangefn} />
                        <label htmlFor="gender" className="form-check-label  ms-1">Female</label> 
                        <input type="radio" id="male" name="gender" value={user.gender} className="form-check-input ms-2" onChange={onChangefn} />
                        <label htmlFor="gender" className="form-check-label  ms-1">Male</label> <br />
                        <input type="radio" id="gender" name="gender" value={user.gender} className="form-check-input" onChange={onChangefn} />
                        <label htmlFor="gender" className="form-check-label  ms-1">Not interested to disclose</label>
                        {(!user.gender && submitted) && <label className="alert">Gender is required</label>}
                    </div>
                </div>
                <div>
                    <label htmlFor="dob" className="form-label">Date Of Birth</label>
                    <input type="date" id="dob" name="dob" value={user.dob} className="form-control" onChange={onChangefn} />
                    {(!user.dob && submitted) && <label className="alert">Date of birth is required</label>}
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" value={user.password} className="form-control" onChange={onChangefn} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}
export default Form;