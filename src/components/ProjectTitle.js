import React from 'react';

const ProjectTitle = (props) => {
    return (
        <div>
            <h2>
                { props.children }
            </h2>
        </div>
    );
}

export default ProjectTitle;