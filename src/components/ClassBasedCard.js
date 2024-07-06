import React from "react";

class ClassBasedCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: this.props.name,
                login: this.props.login
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/ruchikj1998");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    render() {
        const {name, login} = this.state.userInfo;
        return (
            <div>
                <p>Class based component.</p>
                <h2>{name}</h2>
                <h4>login : {login}</h4>
            </div>
        )
    }
}


export default ClassBasedCard;


