import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Statedata from "./Statedata";
class India extends Component {
  constructor() {
    super();
    this.state = {
      indianData: {},
    };
  }
  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/countries/india")
      .then((response) => {
        this.setState({ indianData: response.data });
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 text-center ">
            <img src="https://www.countryflags.io/in/flat/64.png" />
          </div>
        </div>
        <b>
          <div className="row">
            <div className="col-sm-3 mb-3 ">
              <Card style={{ width: "18rem", backgroundColor: "yellow" }}>
                <Card.Body>
                  <Card.Title>Total Cases</Card.Title>
                  <Card.Text>{this.state.indianData.cases}</Card.Text>
                  <Card.Text>
                    [Today {this.state.indianData.todayCases}]{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-3 mb-3">
              <Card style={{ width: "18rem", backgroundColor: "Orange" }}>
                <Card.Body>
                  <Card.Title className="text-white">Active</Card.Title>
                  <Card.Text className="text-white">
                    {this.state.indianData.active}
                  </Card.Text>
                  <Card.Text className="text-white">
                    [Today {this.state.indianData.todayCases}]{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-3 mb-3">
              <Card style={{ width: "18rem", backgroundColor: "green" }}>
                <Card.Body>
                  <Card.Title className="text-white">recovered</Card.Title>
                  <Card.Text className="text-white">
                    {this.state.indianData.recovered}
                  </Card.Text>
                  <Card.Text className="text-white">
                    [Today {this.state.indianData.todayRecovered}]
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3 mb-3">
              <Card style={{ width: "18rem", backgroundColor: "Red" }}>
                <Card.Body>
                  <Card.Title className="text-white">Death</Card.Title>
                  <Card.Text className="text-white">
                    {this.state.indianData.deaths}
                  </Card.Text>
                  <Card.Text className="text-white">
                    [Today {this.state.indianData.todayDeaths}]{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </b>
        <div className="row">
          <div className="col-md-12">
            <Statedata />
          </div>
        </div>
      </div>
    );
  }
}

export default India;
