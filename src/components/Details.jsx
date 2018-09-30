import React, { Component } from 'react';
import axios from 'axios';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {headerName: "IGSN", field: "IGSN" ,checkboxSelection: true},
        {headerName: "Sample Name", field: "sampleName"},
        {headerName: "Latitude", field: "latitude"},
        {headerName: "Longitude", field: "longitude"},
        {headerName: "Elevation", field: "elevation"},
      ],
      rowData: [{}],
      loading: true,
      page_no: 1,
      limit: 20,
      sortingFlag: 0,
      sortSampleNamesFlag: false,
      usercode: localStorage.getItem('usercode')
      }

    /*  this.handleClickNext = this.handleClickNext.bind(this)
      this.handleClickPrev = this.handleClickPrev.bind(this)
      this.changeLimit = this.changeLimit.bind(this)*/
      this.sendRequest = this.sendRequest.bind(this)
    //  this.sampleSort = this.sampleSort.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    }

    componentDidMount(){
    this.sendRequest(0)
  }

  onButtonClick(e){
      console.log(this.gridApi.getSelectedNodes() )
      console.log(this.gridApi.getSelectedNodes()[0].data.IGSN)
  }
  sendRequest(num){

    //Reset state everytime new information needs to be put into state
    this.setState({ rowData: [], loading: true, page_no: (this.state.page_no + num)})

    //API Request: Get IGSNs
    axios
    .get(`https://sesardev.geosamples.org/samples/user_code/${this.state.usercode}`,{
      params: {
        limit: this.state.limit,
        page_no: this.state.page_no + num
      }
    })
    .then ( response => {
      const length = response.data.igsn_list.length
      response.data.igsn_list.map((igsn,i) => {

        //API Request: Get other information for each IGSN
        axios
        .get(`https://sesardev.geosamples.org/webservices/display.php?igsn=${igsn}`)
        .then( response => {

          //Grabbing each piece of information needed and updating state as needed.

          const sampleName = response.data.sample.name
          const latitudes = response.data.sample.latitude
          const longitudes = response.data.sample.longitude
          const elevations = response.data.sample.elevation
          this.setState({rowData: [...this.state.rowData,
            {IGSN: igsn,
              sampleName: sampleName,
              latitude: latitudes,
              longitude: longitudes,
              elevation: elevations }]})

          console.log(length, this.state.rowData.length)
          if(this.state.rowData.length === length){
            //Allow the information to be rendered.
            this.setState({loading: false})
          }
        })
      });
    })

    //Throw an error if the GET request don't come through
    .catch(error => {
      console.log(error)
      /*if (error.response.status == 404){
        console.log('error 404')
        var pageBeforeError = this.state.page_no -1
        this.setState({page_no: (pageBeforeError)})
        this.sendRequest(0)
      }*/
    });
  }

    render() {
        return (
                <div
                  className="ag-theme-balham"
                  style={{
	                height: '500px',
	                width: '600px' ,
                  margin: 'auto'}}
		            >
                   <button onClick={this.onButtonClick}>Get selected rows</button>
                    <AgGridReact
                        onGridReady={ params => this.gridApi = params.api }
                        rowSelection="multiple"
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}

export default Details;
