// import React from "react";
// import { Card, Heading, Text } from "rebass";
// import Results from "../../pages/Results/Results";

// // import { PromiseProvider } from "mongoose";
// // import jobsArray from "../ArrayObject/ArrayObject";
// // This imports an object
// // Next thing to do is import seeds
// // import jobsSeed from '../../../../scripts/seedDB';
// // relative imputs outside of src not supported

// import jobsSeed from "../JobSeeds/JobSeeds";
// // jobsSeed used until we can integrate mongo/mongoose
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

// function ResultCard() {
//   return jobsSeed.map(job => (
//     <div>
//       <div>
//         {};
//         <Card>
//           {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
//           <Card.Body>
//             <Card.Title>{job.service}</Card.Title>
//             <Card.Text>{job.description}</Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroupItem>Cost per Hour: {job.costPerHour}</ListGroupItem>
//             <ListGroupItem>City: {job.city}</ListGroupItem>
//             <ListGroupItem>Zip Code: {job.zipCode}</ListGroupItem>
//             <ListGroupItem>{job.email}</ListGroupItem>
//           </ListGroup>
//         </Card>
//       </div>
//     </div>
//   ));
// }

// export function ResultCardTEST(props) {
//   return (
//     <div>
//       {/* {props.jobScema.map(item => (
//                 console.log(item)
//                 // <Card key={item.id}>
//                 //     <div className='ResultCardStyle'>
//                 //         <div className='ResultsHeaderInfoFloat'>
//                 //             <div className='CardHearderInfoFloat'>
//                 //                 <Heading className='CardTitleStyle'>{item.service}</Heading>
//                 //                 <div className='ZipAndPriceStyle'>
//                 //                     <Text className='CardPriceStyle'>{item.costPerHour}</Text>
//                 //                     <Text className='CardZipcodeStyle'>{item.city} {item.zipCode} </Text>
//                 //                 </div>
//                 //             </div>
//                 //         </div>
//                 //         <Text className='CardTextStyle'>{item.description}</Text>
//                 //     </div>
//                 // </Card>
//             ))} */}
//     </div>
//   );
// }

// export default ResultCard;

// city and zip code together, email , title= service



// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************



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
                                    <Text>Call: {props.phoneNumber}</Text>
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

