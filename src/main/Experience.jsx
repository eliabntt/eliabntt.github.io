import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section className="section">
            <Container>
                <div fluid className="container-fluid p-5 rounded-lg">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <Row>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
}
 
export default Experience;