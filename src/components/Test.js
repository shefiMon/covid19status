import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <table style={{ border: 1 }}>
        <thead>
          <th>Id</th>
          <th>Title</th>
        </thead>
        <tbody>
          {this.state.posts.map((itm, key) => {
            return (
              <tr>
                <td key={key}>{itm.id}</td>
                <td key={key}>{itm.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Test;
