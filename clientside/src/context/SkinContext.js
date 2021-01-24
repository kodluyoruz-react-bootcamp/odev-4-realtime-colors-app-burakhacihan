import { createContext, useState } from "react";

const SkinContext = createContext(null);

export const SkinProvider = ({ children }) => {

	const [color, setColor] = useState({
		background: '#d2d2d2',
		changerName: 'Private'
	});

	const values = {
		color,
		setColor
	};

	return <SkinContext.Provider value={values}>{children}</SkinContext.Provider>;
};

export default SkinContext;