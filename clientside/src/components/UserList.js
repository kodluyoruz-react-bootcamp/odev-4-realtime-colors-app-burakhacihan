import {useContext,useEffect} from 'react'
import SkinContext from '../context/SkinContext'

import { userList} from '../Services/SocketService';

function UserList() {

    const { users,setUsers } = useContext(SkinContext);

    useEffect(() => {
        // userList((list) => {
        //     setUsers(list);
        // })
    },[users,setUsers]);

    return (
        <div>
           <h3>Katılımcı Listesi</h3>
           <ul>
            {
                users.map((item,i) => (
                    <li key={i}><b>{item.name}</b> alana giriş yaptı.</li>
                ))
            }
           </ul>
        </div>
    )
}

export default UserList
