import React from 'react';
import Header from '../header/Header';
import IndividualProject from './IndividualProject';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: ['1', '2']
        }
    }
    render() {
        return (
            <div>
                <Header />
                {this.state.projects.map(() => {
                    return (
                        <div>
                            <IndividualProject />
                        </div>
                    )
                })}
                Project Page
            </div>
        );
    };
};

export default Projects;