import React from 'react';

const ProjectTitle = (props) => {
    return (
        <div>
            <h2>
                { props.children }
            </h2>
            <br/>
        </div>
    );
}

export default ProjectTitle;