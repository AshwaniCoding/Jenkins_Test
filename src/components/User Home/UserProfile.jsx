import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './userProfile.css';
import userImg from '../../assets/images/profile.jpg'

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState();
        // fullName: 'Ashwani Kumar Dwivedi',
        // mobile: '+919039477540',
        // email: 'ashwanidwivedi7898@gmail.com',
        // gender: 'Male',
        // dob: '2002-02-06',
        // maritalStatus: 'Unmarried',
        // aadharId: '1234-5678-9012',
        // address: '123, ABC Street, City, Country',
        // universityName: 'REVA University',
        // collegeName: 'REVA College',
        // courseName: 'MCA',



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Save profile details logic here
        console.log("Edit Profile",profile)
    };

    const getUserProfile = async()=>{
        let user = await JSON.parse(localStorage.getItem('user'))   
        user = {
            fullName: user?.full_name,
            mobile: user?.mobile,
            email: user?.email,
            gender: user?.gender,
            dob: user?.dob,
            maritalStatus: user?.marital_status,
            aadharId: user?.aadhar_id,
            address: user?.address,
            universityName: user?.university_name,
            collegeName: user?.college_name,
            courseName: user?.course_name,
        }
        setProfile(user)
    } 

    useEffect(()=>{
        getUserProfile()
    },[])

    return (
        <Container fluid className="user-profile">
            <Row className="header">
                <Col>
                    <h2>My Profile</h2>
                </Col>
                <Col className="text-end">
                    {!isEditing ? (
                        <Button variant="primary" onClick={handleEditClick}>Edit</Button>
                    ) : (
                        <Button variant="success" onClick={handleSaveClick}>Save</Button>
                    )}
                </Col>
            </Row>

            {/* First Div: User Image and Personal Information */}
            <div className="profile-section personal-details">
                <h3>Personal Details</h3>
                <Row>
                    <Col md={4} className="user-image-section">
                        <div className="user-image">
                            <img src={userImg} alt="User" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={profile?.fullName}
                                        readOnly={false}    
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={profile?.email}
                                        readOnly={false}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formMobile">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="mobile"
                                        value={profile?.mobile}
                                        readOnly={false}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formDOB">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        value={profile?.dob}
                                        onChange={handleInputChange}
                                        readOnly={!isEditing}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formMaritalStatus">
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="maritalStatus"
                                        value={profile?.maritalStatus}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    >
                                        <option>Unmarried</option>
                                        <option>Married</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="gender"
                                        value={profile?.gender}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formAadharId">
                                    <Form.Label>Aadhar ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="aadharId"
                                        value={profile?.aadharId}
                                        onChange={handleInputChange}
                                        readOnly={!isEditing}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={8}>
                                <Form.Group className="mb-3" controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="address"
                                        value={profile?.address}
                                        onChange={handleInputChange}
                                        readOnly={!isEditing}
                                        rows={2}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            {/* Second Div: Student Information */}
            <div className="profile-section student-information">
                <h3>Student Information</h3>
                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="formUniversityName">
                            <Form.Label>University Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="universityName"
                                value={profile?.universityName}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="formCollegeName">
                            <Form.Label>College Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="collegeName"
                                value={profile?.collegeName}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="formCourseName">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="courseName"
                                value={profile?.courseName}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default UserProfile;
