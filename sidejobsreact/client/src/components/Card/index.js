import React from 'react';
import './style.css';
import { Heading, Card, Text } from 'rebass';

function JobCard(props) {
    return (
        <div className='wrapper'>
            <Card>
                <div
                style={{fontFamily: 'Geneva, Verdana, sans-serif'}} className='ResultCardStyle'>
                    <div 
                    className='topContainerStyle'>
                        <Text style={{fontFamily: 'Geneva, Verdana, sans-serif'}} className='HeadingStyle'>{props.service}</Text>

                        <div className='ZipAndPriceStyle'>
                            <Text className='ZipcodeStyle'>{props.city}, {props.zipCode}</Text>
                            <Text className='CostPerHour'>${props.costPerHour}</Text>
                        </div>
                    </div>

                    <div>
                        <div className='OverviewStyle'>
                            <div className='OverviewHeaderStyle'>
                                {/* <Text>Overview</Text> */}
                                <Text>{props.description}</Text>
                                {/* <Text className='DateStyle'>Date Posted: {props.date}</Text> */}
                            </div>
                            <div className='OverviewStyle'>
                               
                                <div className='ContactStyle'>
                                    <Text className='nameStyle'>Contact {props.firstName} {props.lastName},</Text>
                                    <Text className='emailStyle'>Email: {props.email}</Text>
                                    <Text className='phoneStyle'>Phone: {props.phoneNumber}</Text>
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

