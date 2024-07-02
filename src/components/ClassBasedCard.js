import React from "react";

class ClassBasedCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {name, location} = this.props;
        return (
            <div>
                <p>Class based component.</p>
                <h2>{name}</h2>
                <h4>Location : {location}</h4>
            </div>
        )
    }
}


export default ClassBasedCard;


