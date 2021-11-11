import React, { Component } from 'react'
import ContactService from '../services/ContactService'
import { CForm, CFormLabel, CFormInput, CCol  } from '@coreui/react';


class ViewContactComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            contact: {}
        }
    }

    componentDidMount(){
        ContactService.getContactById(this.state.id).then( res => {
            this.setState({contact: res.data});
        })
    }

    render() {
        return (
            <div> 
                <CForm className="row g-3">
                    <CCol md={12} >
                        <img src={ this.state.contact.avatar} alt={this.state.contact.avatar } className="rounded mx-auto d-block" />
                    </CCol>
            
                    <CCol md={6}>
                        <CFormLabel htmlFor="inputFirstName">First Name</CFormLabel>
                        <CFormInput type="text" id="inputFirstName" value={ this.state.contact.first_name } disabled/>
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="inputLastName">Last Name</CFormLabel>
                        <CFormInput type="text" id="inputFirstName" value={ this.state.contact.last_name } disabled/>
                    </CCol>
                    <CCol xs={6}>
                        <CFormLabel htmlFor="inputDesignationTitle">Designation</CFormLabel>
                        <CFormInput id="inputDesignationTitle" value={ this.state.contact.job_title } disabled/>
                    </CCol>
                    <CCol xs={6}>
                        <CFormLabel htmlFor="inputCompanyName">Company Name</CFormLabel>
                        <CFormInput id="inputCompanyName" value={ this.state.contact.company } disabled/>
                    </CCol>
                    <CCol xs={6}>
                        <CFormLabel htmlFor="inputContactNumber">Contact Number</CFormLabel>
                        <CFormInput id="inputContactNumber" value={ this.state.contact.phone } disabled/>
                    </CCol>
                    <CCol xs={6}>
                        <CFormLabel htmlFor="inputEmailAddress">Email Address</CFormLabel>
                        <CFormInput id="inputEmailAddress" value={ this.state.contact.email } disabled/>
                    </CCol>
                </CForm>
                
                
            </div>
        )
    }
}

export default ViewContactComponent;