import React from "react";
import PropTypes from "prop-types";

import * as Icons from "./Icons";


const Header = ({iconName, text}) => {
    const Icon = Icons[iconName];

    return (
        <span className="flex items-center font-medium opacity-50 mb-8">
            { iconName && <Icon className="mr-2" /> }
            <h3>{text.toUpperCase()}</h3>
        </span>
    );
}

Header.propTypes = {
    iconName: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default Header;
