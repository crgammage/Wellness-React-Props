import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

export default class GuidanceContainer extends React.Component {

    renderGuidanceItem = () => {
        return (
            <>
            {wellnessFactors.map((factor, index) => 
                    <GuidanceItem
                        key={index}
                        id={factor.id}
                        color={factor.color}
                        title={factor.title}
                        image={factor.image}
                        description={factor.description}
                        stars={factor.stars}
                    />
                )}
            </>
        )

    }

    renderItemInfo = () => {
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGuidanceItem()}   
                    </tbody>
                </table>
            </div>
        )   
    }

    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    }
}