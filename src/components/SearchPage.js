import React, { Component } from 'react';
import image from '../assets/images/landing-page.png';
import styled from 'styled-components';
import Select from 'react-select';

const Image = styled.img`
  width: 100%;  
`
class SearchPage extends Component {

  state = {
    colleges: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/colleges")
      .then(response => response.json())
      .then((collegeData) => this.setState({ colleges: collegeData.map(college => {
        return {value: college.id, label: college.name}
      }) 
    }))
        
  }

  render() {
    return (
      // <div className="row" id="landing-page">
      // <div className="col">
      <>
        <div className="row">
          <div className="col">
            <form>
              <Select 
                options={this.state.colleges}
                onChange={(e) => {this.props.handleChange(e)}}
                placeholder="Search..."
                openMenuOnClick={false} />
              <div className="input-group mb-3">
                <div className="input-group-append">

                </div>
              </div>
            </form>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image src={image} id="landing-page-img" />
          </div>
        </div>
      </>
      //   </div>

      // </div>
    )
  }
}

export default SearchPage;