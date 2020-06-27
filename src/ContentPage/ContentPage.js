import React, { Component } from 'react';
// import data from './sampledata.json'

class ContentPage extends Component {
  render() {
    return (
        <div>
            <h2>{"sampledata.title"}</h2>
            <div>
              {"sampledata.content"}
               // is it "sampledata.content.paragraph"/ do i need to specify ".paragraph" or cycle through the array? 
               <p>{"sampledata.paragraph"}</p>
               <p>{"sampledata.paragraph"}</p>
            </div>
            <h4>{"sampledata.Sources"}</h4>
        </div>
    );
  }
}

export default ContentPage;
