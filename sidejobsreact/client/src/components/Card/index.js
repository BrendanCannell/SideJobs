import React from "react";
// import { Card, Heading, Text } from "rebass";
// import Results from "../../pages/Results/Results";
// import { PromiseProvider } from "mongoose";





export function ResultCard(props) {
    return (
        <div>
            {props.jobScema.map(item => (
                console.log(item)
                // <Card key={item.id}>
                //     <div className='ResultCardStyle'>
                //         <div className='ResultsHeaderInfoFloat'>
                //             <div className='CardHearderInfoFloat'>
                //                 <Heading className='CardTitleStyle'>{item.service}</Heading>
                //                 <div className='ZipAndPriceStyle'>
                //                     <Text className='CardPriceStyle'>{item.costPerHour}</Text>
                //                     <Text className='CardZipcodeStyle'>{item.city} {item.zipCode} </Text>
                //                 </div>
                //             </div>
                //         </div>
                //         <Text className='CardTextStyle'>{item.description}</Text>
                //     </div>
                // </Card>
            ))}
        </div>
    );
}

export default ResultCard;

// city and zip code together, email , title= service 