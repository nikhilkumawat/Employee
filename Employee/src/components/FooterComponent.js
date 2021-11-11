import React, { Component } from 'react'
import { CFooter } from '@coreui/react';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <CFooter position='fixed'>
                    <div>
                        <Link to="/" >Employee </Link>
                        <span>&copy; 2021 Nikhil.</span>
                    </div>
                    <div>
                        <span>Powered by </span>
                        <Link to="/" >Employee</Link>
                    </div>
                </CFooter>
            </div>
        )
    }
}

export default FooterComponent