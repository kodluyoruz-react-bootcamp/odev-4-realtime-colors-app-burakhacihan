
import {useEffect, useContext} from 'react';
import {PhotoshopPicker} from 'react-color';
import SkinContext from '../context/SkinContext';
import {initSocket,disconnectSocket, sendColor,getColor} from '../Services/SocketService';

function Wrapper() {

    const { color, setColor } = useContext(SkinContext);

    const changeColorHandler = (color) => {
        setColor({
            background : color.hex
        })
    } 

    const colorChangeConfirm = () => {
        document.body.style.background = color.background;
        sendColor(color.background);
    }

    useEffect(() => {

        initSocket();

        getColor((color) => {
            setColor(color);
        })

        document.body.style.background = color.background;

    },[color]);


    return (
        <>
        {   
            <PhotoshopPicker header="Real-Time Background Changer" color={color.background} onAccept={colorChangeConfirm} onChangeComplete={changeColorHandler} />
        }
        <div>
            <strong>Mevcut Renk HEX Kodu: </strong> {color.background}
        </div>
        </>
    )
}

export default Wrapper
