import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
///////////////////////////////////////////////////////////////////
function Header() {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">App Description</h5>
                        <p>
                            This is Homework for Lesson 1
                        </p>
                        <h5 className="title">Student:</h5>
                        <p>
                            Sergey Popach
                        </p>
                        <h5 className="title">School Name:</h5>
                        <p>
                            Programming Academy in Silicon Valley
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">School Links</h5>
                        <ul>
                            <li className="list-unstyled" style={{padding: 5}}>
                                <SocialIcon url="https://www.facebook.com/groups/185538711998736/"></SocialIcon>
                            </li>
                            <li className="list-unstyled" style={{padding: 5}}>
                                <SocialIcon url="https://pasv.us/react"></SocialIcon>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> PASV </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Header;
