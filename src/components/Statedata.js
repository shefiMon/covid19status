import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Accordion } from "react-bootstrap";

class Statedata extends Component {
  constructor() {
    super();
    this.state = {
      StateData: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        // response.data;
        this.setState({ StateData: response.data });
      });
  }

  render() {
    let keys = Object.keys(this.state.StateData);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Accordion>
              {keys.map((items, key) => {
                let districts = this.state.StateData[items].districtData;
                let district_keys = Object.keys(districts);

                let Total_active = 0;
                let total_confirmed = 0;
                let total_deaths = 0;
                let total_recovered = 0;
                let districts_list = [];
                for (let x in districts) {
                  Total_active += districts[x].active;
                  total_confirmed += districts[x].confirmed;
                  total_deaths += districts[x].deceased;
                  total_recovered += districts[x].recovered;
                  let ob = districts[x];
                  ob["distct_Name"] = x;
                  districts_list.push(ob);
                }

                return (
                  <Card key={key}>
                    <Card.Header className="text-red">
                      <Accordion.Toggle
                        className="btn btn-outline-info"
                        style={{ width: "100%", textAlign: "left" }}
                        eventKey={key}
                      >
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 600,
                            width: "50%",
                          }}
                        >
                          {items}
                        </span>
                        <span className="btn btn-secondary m-2">
                          Total Cases: {total_confirmed}
                        </span>

                        <span className="btn btn-warning m-2">
                          Active: {Total_active}
                        </span>

                        <span className="btn btn-success m-2">
                          Recovered: {total_recovered}
                        </span>

                        <span className="btn btn-danger m-2">
                          Deaths: {total_deaths}
                        </span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={key}>
                      <Card.Body>
                        <table className="table table-bordered table-stripped">
                          <thead>
                            <tr key={key}>
                              <th>District</th>
                              <th>Active</th>
                              <th>confirmed</th>
                              <th>recovered</th>
                              <th>Deaths</th>
                            </tr>
                          </thead>
                          <tbody>
                            .
                            {districts_list.map((itm, k) => {
                              return (
                                <tr key={k}>
                                  <td>{itm.distct_Name}</td>
                                  <td>{itm.active}</td>
                                  <td>{itm.confirmed}</td>
                                  <td>{itm.recovered}</td>
                                  <td>{itm.deceased}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}

export default Statedata;
