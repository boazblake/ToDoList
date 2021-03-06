import React, { component } from 'react';
import Message from './message';

class Messages extends React.Component {
  constructor(props){
    super(props);
    this.chat = props.chat;
    //init the state convo with an empty array 
    this.state = {
      convo: []
    };
  }

  //when our component mounts, it will call to the database with
  //this.chat.watch, setting the state and re-rendering our component and messages

  componentDidMount() {
    this.chat.watch().subscribe(
      (messages) => {
        let convo = messages.map((message) => {
          return message
        });
        this.setState({convo});
      },
      (err) => {
        console.log('err', err)
      }
    );
  }


  render(){
    let msgsJsx = this.state.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    });
    return (
      <div className="container-fluid">
        {msgsJsx}
      </div>
    );
  }
}

export default Messages;