import {useState,useContext} from 'react'
import SkinContext from '../context/SkinContext';

import { addUser, userList, sessionInfo} from '../Services/SocketService';

function UserLogin() {

    const {nameContext,setNameContext,users,setUsers,setSessionid} = useContext(SkinContext);

    const [name, setName] = useState('');

    const formSubmitHandle = (e) =>{
        e.preventDefault();
        setNameContext(name);
        addUser(name);
        setUsers([...users,{name:name}]);
        sessionInfo((userSession) => { setSessionid(userSession) });
        userList((users) => { setUsers([...users]); });
    }

    return (
        <>
        {
            !nameContext && (
                <form onSubmit={formSubmitHandle}>
                    <input className="inputName" maxLength={20} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Bir isim girin ve enter tuşuna basın."  /> 
                </form>
            )
        }
        </>
    )
}

export default UserLogin
