import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {updateUser} from "./UserReduser.jsx";


const Update = () => {
    const {id} = useParams();
    const users = useSelector(state => state.users);
    const existingUsers = users.filter(u => u.id == id);
    const {name,email}= existingUsers[0];
    const [uName, setName] = useState(name);
    const [uEmail, setEmail] = useState(email);
    let dispatch = useDispatch();
    let navigate = useNavigate();



    const updateUsers = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uName,
            email:uEmail
        }))
        navigate('/')
    }



    return (
        <>
            <section className={'d-flex justify-content-center align-items-center vw-100 vh-100'}>
                <section
                    className={'border bg-secondary text-white d-flex w-25 h-auto justify-content-center align-items-center flex-column'}>
                    <form className={'p-3'} onSubmit={updateUsers}>
                        <h5>Update Student</h5>
                        <div className="mb-3 mt-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input value={uName} onChange={(event) => setName(event.target.value)} type="text"
                                   className="form-control form-control-sm" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input value={uEmail} onChange={(event) => setEmail( event.target.value)} type="email"
                                   className="form-control form-control-sm" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <button className={'btn btn-info'}>Update</button>
                    </form>
                </section>
            </section>
        </>
    )
}
export default Update;

