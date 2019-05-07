import React from 'react';

class IndividualProject extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.projects.map((project) => {
                    return (
                        <div>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            {project.technologies.map((item) => {
                                return (
                                    <p>{item}</p>
                                )
                            })}
                            <a href={project.github} target='_blank'>Github Repo</a>
                            {project.website && <a href={project.website} target='_blank'>Website</a>}
                        </div>
                    )
                })}
            </div>
        );
    };
};

export default IndividualProject;