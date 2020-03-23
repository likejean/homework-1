import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import PopoverPage from "./Popover";
import Description from "./Description";

const JumbotronPage = props => {
    const { data } = props;
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }}>
                        <MDBCol className="text-white text-center py-5 px-4 my-5"
                            style={{
                                backgroundImage: `url(https://media.gettyimages.com/vectors/seattle-skyline-sketch-vector-id177344456?s=2048x2048)`
                            }}
                        >
                            <MDBCol className="py-5">
                                <PopoverPage />
                                <Description data={data}/>
                                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">SEATTLE, WA</MDBCardTitle>
                            </MDBCol>
                        </MDBCol>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage;