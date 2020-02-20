import React, { Component } from "react";
import API from '../../utils/API';
import './style.css'
import JobCard from '../../components/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Results extends Component {
    state = {
        jobs: [],
        jobSearch: ''
    };

    componentDidMount() {
        this.loadJobs();
    };
    loadJobs() {
        API.getJobs()
            .then(res => {
                this.setState({ jobs: res.data });
                console.log(res);
                console.log(this.state.jobs)
            }).catch(function (err) {
                console.log(err);
            })
    };

    handleFormSubmit = (event) => {

        // event.preventDefault();
        API.findByService(this.state.jobSearch)
            .then(res =>
                console.log({ res }) || this.setState({ jobs: res.data }))

            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const { name, value } =
            event.target;
        this.setState({
            [name]: value
        });
    };
    onKeyPress = e => {
        if (e.which === 13) {
            this.handleFormSubmit();
        }
    }

    render() {
        return (
            <div>
                <div className='wrapper'>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Button bsPrefix='submitForm' onClick={this.handleFormSubmit} variant="outline-secondary">Search</Button>
                        </InputGroup.Prepend >
                        <FormControl  
                        bsPrefix='inputSubmit'
                        name='jobSearch' value={this.state.jobSearch}
                            onChange={this.handleInputChange} 
                            onKeyPress={this.onKeyPress}/>
                    </InputGroup>
                </div>
                {this.state.jobs.map(job => (
                    <JobCard
                        key={job.id}
                        firstName={job.firstName}
                        lastName={job.lastName}
                        service={job.service}
                        description={job.description}
                        phoneNumber={job.phoneNumber}
                        email={job.email}
                        zipCode={job.zipCode}
                        costPerHour={job.costPerHour}
                        city={job.city}
                        date={job.date}
                    />
                )
                )}
            </div>
        )
    }
}



export default Results;