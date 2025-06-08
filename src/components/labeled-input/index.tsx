import React from 'react';
import style from './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface LabeledInputProps {
    id: string | number;
    name: string;
    type?: string;
    icon: IconProp;
}

function LabeledInput({ id, name, type = 'text', icon }: LabeledInputProps) {

    return (
        <>
            <div className={style.icons}>
                <i className={style.iconStyle}><FontAwesomeIcon icon={icon} /></i>
            </div>
            <input type={type} className={style.textInput} name={name} id={String(id)} />
        </>
    )
}

export default LabeledInput;