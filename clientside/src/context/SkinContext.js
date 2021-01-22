import { createContext, useState } from "react";

const SkinContext = createContext(null);

export const SkinProvider = ({ children }) => {

	const [color, setColor] = useState({
		background: '#d2d2d2',
		changerName: 'Private'
	});

	const [nameContext,setNameContext] = useState("");

	const [users,setUsers] = useState([]);

	const [sessionid,setSessionid] = useState("");

	const values = {
		color,
		setColor,
		nameContext,
		setNameContext,
		users,
		setUsers,
		sessionid,
		setSessionid
	};

	return <SkinContext.Provider value={values}>{children}</SkinContext.Provider>;
};

export default SkinContext;