import React, { useContext } from 'react';
import { AppContext } from './AppProvider';
function Demo(props) {
    const objContext = useContext(AppContext);
    return (<h1>Name: {objContext.name}<br /> No:{objContext.no}
    </h1>
    );
}

export default Demo;
