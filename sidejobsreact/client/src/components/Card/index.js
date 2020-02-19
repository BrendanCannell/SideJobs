import React from 'react';
import './style.css';
import { Heading, Card, Text } from 'rebass';

function JobCard(props) {
    return (
        <div>
            <Card>
                <div className='ResultCardStyle'>
                    <div className='topContainerStyle'>
                        <Heading className='HeadingStyle'>{props.service}</Heading>

                        <div className='ZipAndPriceStyle'>
                            <Text className='ZipcodeStyle'>{props.city}, {props.zipCode}</Text>
                            <Text className='CostPerHour'>${props.costPerHour}</Text>
                        </div>
                    </div>

                    <div>
                        <div className='OverviewStyle'>
                            <div className='OverviewHeaderStyle'>
                                <Text>Overview</Text>
                                <Text>{props.description}</Text>
                                <Text className='DateStyle'>Date Posted: {props.date}</Text>
                            </div>
                            <div className='OverviewStyle'>
                               
                                <div className='ContactStyle'>
                                    <Text>Contact {props.firstName} {props.lastName}</Text>
                                    <Text>Email: {props.email}</Text>
                                    <Text>     Call:{props.phoneNumber}</Text>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default JobCard;

