import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../redux/actions/userAction';

export default function Register() {
    const [username, setUsername] = useState();
    const [useremail, setUseremail] = useState();
    const [userpassword, setUserpassword] = useState();
    const dispatch = useDispatch();
    const handleRegisterUser = () => {
        dispatch(registerUserAction({ username, useremail, userpassword }))
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3 ">
                    <input type="text" className='form-control' placeholder='Enter Name' value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="text" className='form-control' placeholder='Enter Email' value={useremail} onChange={e => setUseremail(e.target.value)} />
                    <input type="text" className='form-control' placeholder='Enter Password' value={userpassword} onChange={e => setUserpassword(e.target.value)} />
                    <button className='btn btn-primary' onClick={handleRegisterUser}>Register</button>
                </div>
            </div>
        </div>
    )
}
