// based on https://www.valentinog.com/blog/socket-io-node-js-react/
// npm i socket.io-client
// npm install
// npm start // not yarn - yarn doesn't work

// To jest client ktory slucha socket-io-server
// musisz urucomic socket-io-server

import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001" // listening to socket-io-server end point
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response ? (
          <p>The temperature in Florence is: {response} °F</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
export default App;
