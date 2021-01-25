import { createContext, useState } from "react";

const SkinContext = createContext(null);

export const SkinProvider = ({ children }) => {

	const [color, setColor] = useState({
		background: '#d2d2d2',
		changerName: 'Root'
	});

	const [nameContext,setNameContext] = useState("");

 	const [sessionid,setSessionid] = useState("");

	 const values = {
		color,
		setColor,
		nameContext,
		setNameContext,
		sessionid,
		setSessionid
	};

	return <SkinContext.Provider value={values}>{children}</SkinContext.Provider>;
};

export default SkinContext;