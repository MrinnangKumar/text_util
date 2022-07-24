import React from 'react';

const Alert = (props) => {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        // lower.charAt(0).toUpperCase() by this we are saying that convert the first character or alphabet to uppercase 
        // & lower.slice(1)this will convert every character to lowercase leaving the 1st character
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        // This means that if props.alert is not null execute the further code but if it is null then don't execute the code
        props.alert && <div className={`alert alert-$ {props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize (props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
};
  
export default Alert;