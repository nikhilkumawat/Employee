import React, { Component } from 'react'
import {CContainer, CHeader, CHeaderBrand} from '@coreui/react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
        <>
            <CHeader position='sticky'>
                <CContainer fluid>
                
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <CHeaderBrand>
                            
                            <img src="logo.svg" alt="logo" width="22" height="24" className="d-inline-block" />{' '} Employee
                            
                        </CHeaderBrand>
                    </Link>
                </CContainer>
            </CHeader>
        </>
        )
    }
}

export default HeaderComponent