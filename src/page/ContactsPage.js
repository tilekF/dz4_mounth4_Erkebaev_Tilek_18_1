import React, {Component} from 'react';

class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { input: ""}
    }

    addInput = (event) =>{
        this.setState({input: event.target.value})
    }

    addsInput = () => {
        this.setState({input: ""})
    }




    addProduct = () => {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.addInput}
                />
                <button onClick={this.addProduct}>add</button>
                <button onClick={() => this.setState({input:""})}>clear</button>

            </>
        );
    }
}

export default ContactsPage;