import {useState,useContext} from 'react'
import SkinContext from '../context/SkinContext';

function UserLogin() {

    const {nameContext,setNameContext} = useContext(SkinContext);

    const [name, setName] = useState("");

    const formSubmitHandle = (e) =>{
        e.preventDefault();
        setNameContext(name);
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
