import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
                {wellnessFactors.map((factor, index) => 
                    <WellnessItem
                        key={index}
                        id={factor.id}
                        color={factor.color}
                        title={factor.title}
                    />
                )}
            </Pie>
        )
    }
}