import React, {Component} from 'react';
import Menu from "./text/Menu";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {menu: false}
    }

    handleMenu = () => {
        this.setState({menu: !this.state.menu})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleMenu}>кнопка</button>
                {
                    this.state.menu === true
                    ?
                        <Menu/>
                        :
                        ""
                }
            </div>
        );
    }
}

export default AboutUs;