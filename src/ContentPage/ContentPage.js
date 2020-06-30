import React, { Component } from 'react';
// import data from './sampledata.json'

class ContentPage extends Component {
  render() {
    return (
        <div>
            <p>{
              function inputdata(newData) {
	        	  const newinfo = newData['content'];

	              for (let i = 0; i < newinfo.length; i++){
		              const newDiv = document.createElement('p');
		              newDiv.textContent = newinfo[i].paragraph;
	                }}
            }</p>
        </div>
    );
  }
}

export default ContentPage;
