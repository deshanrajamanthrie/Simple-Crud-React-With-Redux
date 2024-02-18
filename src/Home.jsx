import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteUser} from "./UserReduser";

const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.users)
    console.log(user);



   const removeUser = (id) => {
       //alert("Hello")
       dispatch(deleteUser({id:id}));

   }

    return (
        <>
            <section className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                <div className='container w-75'>
                    <h2>Crud App With Redux</h2>
                    <Link to="/create" className={'btn btn-success w-20 mt-3'}>Create </Link>
                    <table className="table  w-75 mt-5">
                        <thead>
                        <tr>

                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user.map((users, index = +1) => (
                            <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>
                                    <Link to={`/edit/${users.id}`} className={'btn btn-primary btn-sm'}>Edit</Link>
                                    <button className={'btn btn-danger btn-sm ms-2'} onClick={()=> removeUser(users.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Home;