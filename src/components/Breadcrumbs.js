import './Breadcrumbs.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Breadcrumbs = ({ breadcrumbs=[] }) => {
    const lastCrumb = breadcrumbs.length - 1;
    return (
        <div className="breadcrumbs">
            { breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                    <Link
                        style={ index === lastCrumb ? { color: 'black'} : { color: 'var(--gray-60)'} } 
                        to={breadcrumb.link}>
                        {breadcrumb.alias}
                    </Link>
                    { index !== lastCrumb && <span>/</span> }                 
                </React.Fragment>
            )) }
        </div>
    );
}
 
export default Breadcrumbs;