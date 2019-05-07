import React from 'react';
import Header from '../header/Header';
import IndividualProject from './IndividualProject';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                { name: 'Training Pals', description: 'A social media to track your calories, and connect with friends!', technologies: ['React', 'Redux', 'Firebase', 'Node', 'Sass'], github: 'https://github.com/21x37/calorie-tracker', website: 'https://trainingpals.herokuapp.com' },
                { name: 'Freight Inc', description: 'A freight broker website to make dispatching trucks easier!', technologies: ['React', 'Node', 'Sass',], github: 'https://github.com/21x37/freight-con', website: 'http://freight-website.herokuapp.com/' },
                { name: 'comment-bot', description: 'npm module to easily setup a reddit comment bot!', technologies: ['Node'], github: 'https://github.com/21x37/comment-bot', npm: 'https://www.npmjs.com/package/comment-bot' }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <IndividualProject projects={this.state.projects} />
                Project Page
            </div>
        );
    };
};

export default Projects;