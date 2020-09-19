import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

class World extends Component {
  constructor() {
    super();
    this.state = {
      CountryData: [],
    };
  }

  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
      // console.log(response.data);

      this.setState({ CountryData: response.data });
      $(document).ready(function () {
        $("#myTable").DataTable();
      });
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-responsive table-bordered" id="myTable">
            <thead>
              <tr>
                <th>Country Name</th>
                <th>Flag</th>
                <th>cases</th>
                <th>todayCases</th>
                <th>recovered</th>
                <th>todayRecovered</th>
                <th>active</th>
                <th>deaths</th>
                <th>TodayDeaths</th>
                <th>population</th>
              </tr>
            </thead>
            <tbody>
              {this.state.CountryData.map((item, ke) => {
                return (
                  <tr>
                    <td>{item.country}</td>
                    <td>
                      <img
                        src={item.countryInfo.flag}
                        style={{ width: "64px" }}
                      />
                    </td>
                    <td>{item.cases}</td>
                    <td>{item.todayCases}</td>
                    <td>{item.recovered}</td>
                    <td>{item.todayRecovered}</td>

                    <td>{item.active}</td>
                    <td>{item.deaths}</td>
                    <td>{item.todayDeaths}</td>
                    <td>{item.population}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default World;
