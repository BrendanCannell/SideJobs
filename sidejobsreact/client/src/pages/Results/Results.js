import React, { Component } from "react";
import API from '../../utils/API';
import JobCard from '../../components/Card';

// import { Card, Heading, Text, Image } from "rebass";
// import { Card, Image, Heading, Text } from "rebass";
// import { CardData, Card } from '../../components/Card';


class Results extends Component {
    // constructor(props) {
    // super(props);
    // this.
    state = {
        jobs: []
    };
    // };
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

    render() {
        return (
            <div>
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
            // <div>
            //     <Card>
            //         <div className='ResultCardStyle'>
            //             <div className='ResultsHeaderInfoFloat'>
            //                 <div>
            //                     <Image className='CardImageStyle' src={'https://via.placeholder.com/150x150'} />
            //                 </div>
            //                 <div className='CardHearderInfoFloat'>
            //                     <Heading className='CardTitleStyle'>Title Title Title Title Title Title </Heading>
            //                     <div className='ZipAndPriceStyle'>
            //                         <Text className='CardPriceStyle'> Pricing/hr</Text>
            //                         <Text className='CardZipcodeStyle'> ZipCode </Text>
            //                     </div>
            //                 </div>
            //             </div>
            //             <Text className='CardTextStyle'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            //         </div>
            //     </Card>
            // </div>
        )
    }
}

// const ResultCardStyle = {
//     border: '30px, solid, black',
//     margin: '20px',
//     borderRadius: '4px',
//     boxShadow: '4px',
//     // shadows: {
//     //     small: '0 0 4px rgba(0, 0, 0, .125)'}

// };



export default Results;