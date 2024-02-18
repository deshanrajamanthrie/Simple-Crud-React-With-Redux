import {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "./UserReduser";
import {useNavigate} from "react-router-dom";

const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state)=>state.users);

   const dispatch = useDispatch();
   let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1,name,email}));
        navigate('/');
    }

    return (
        <>
            <section className={'d-flex justify-content-center align-items-center vw-100 vh-100'}>
                <section
                    className={'border bg-secondary text-white d-flex w-25 h-auto justify-content-center align-items-center flex-column'}>
                    <form className={'p-3'} onSubmit={handleSubmit}>
                        <h5>Create Student</h5>
                        <div className="mb-3 mt-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input onChange={(event) => setName(event.target.value)} type="text"
                                   className="form-control form-control-sm" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input onChange={(event) => setEmail(event.target.value)} type="email"
                                   className="form-control form-control-sm" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <button className={'btn btn-info'}>Submit</button>
                    </form>
                </section>
            </section>
        </>
    )
}
export default Create;