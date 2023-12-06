import React, {useState} from 'react';

const MyContext = React.createContext();

function ContextProvider({children}) {
	const [user, setUser] = useState('Patrick');

	const myInfo = {user};

	return <MyContext.Provider value={myInfo}>{children}</MyContext.Provider>;
}

function useMyContext() {
	const myContext = React.useContext(MyContext);
	return myContext;
}

export {ContextProvider, useMyContext};
