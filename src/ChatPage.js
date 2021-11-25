
import React, { useState } from 'react'
import { Col, FormControl, InputGroup, Row, Button } from 'react-bootstrap'

import { useParams } from "react-router-dom";
const ChatPage = () => {
    const { id } = useParams();
    const [input, setinput] = useState('')
    const [messages, setmessages] = useState([])

    const handleMessages = (event)=>{
        let temp = [...messages];
        temp.push(...input)
        setmessages(temp)
    }
    return (
        <>
            <Row style={{ height: "69vh",overflowY: "scroll" ,display: "flex" , flexDirection: "column-reverse"}}>
                <Col sm={12} >
                    <p className="chat_message">Hey Guys</p>
                    { 
                        messages.map((x,i) => {
                            return(
                           x? <p className="chat_message chat_reciever">{x}</p> : null
                            )
                        })
                      
                    }


                </Col>

            </Row>
            <Row >
                <Col sm={12} >
                    <InputGroup className="mb-3" style={{position:"fixed",width:"60%"}}>
                        <FormControl
                            value={input}
                            onChange={(e) => setinput([e.target.value])}
                            placeholder="Write a message..."
                        />
                        <Button variant="secondary" 
                        onClick={(e)=>{handleMessages(e)}}>
                            Button
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}

export default ChatPage
