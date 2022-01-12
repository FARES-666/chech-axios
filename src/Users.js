import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './Users.css';
const Users = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const infos = async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            console.log(data);
            setUsers(data);
        };
        infos();
    }, []);
    return (
        <div>
            
            <div className="mod">
                {users.map((el) => (
                    <div>
            <Button onClick={handleShow} className="but">
                <h1>{el.id}</h1>
            </Button>
            <Modal show={show} onHide={handleClose} style={{backgroundColor:'white'}} >
                <Modal.Header closeButton style={{backgroundColor:'lightblue'}}>
                    <Modal.Title ><h1>Name : {el.name}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'lightgreen'}}>
                    <h2>User : {el.username}</h2>
                    <h3>Email : {el.email}</h3>
                    <h4>Address : {el.address.street}</h4>
                    <h5>Phone : {el.phone}</h5>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'lightgreen'}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Users;
