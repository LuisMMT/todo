import React from "react";
import { ReactComponent as IconAdd} from './agregar.svg';
import { ReactComponent as IconDelete } from './eliminar.svg';
import './TodoIcon.css';

    
const iconTypes= {
    "check":color=>(
        <IconAdd className="Icon-svg Icon-svg--check" fill={color}/>
    ),
    "delete":color=>(
        <IconDelete className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};


function TodoIcon({type,color='gray',onClick}) {


    return(
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export{TodoIcon}