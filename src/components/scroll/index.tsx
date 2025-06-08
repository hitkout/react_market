import React from 'react';
import { Link as Anchor } from 'react-scroll';
import style from './style.css';
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Scroll() {
    return (
        <Anchor activeClass="active" className="scrollToTop" to="scrollToTop" spy={true} smooth={true} duration={500} >
            <button className={style.scroll}><i><FontAwesomeIcon icon={faAngleDoubleUp} /></i></button>
        </Anchor>
    );
}

export default Scroll;