import React, { Component } from 'react';
import data from '../sampledata.json';

class ContentPage extends Component {

  inputData() {

    JSON.stringify(data);
    //loop through array to get all the data from 'content'
    for (var i = 0; i < data.length; i++){
      //loop through each object in 'content' and grab data in 'paragraph'
      for (var j = 0; j < data[i].content.length; j++){
        //display content
        // console.log(data[i].content[j]);
        var disCont = data[i].content[j];
        console.log("disCont", disCont)
        // return <span>{disCont}</span>;
    }
  }

    //loop through array to get all the data from title
    for (var a = 0; a < data.length; a++){
        var disTitle = data[a].title;
        console.log(data[a].title);
        return <span>{disTitle}</span>;
      }

    //loop through array to get all the data from souces
    for (var c = 0; c < data.length; c++){
      for (var d = 0; d < data.length; d++){
        console.log(data[c].sources[d]);
        //return <span>{(data[i].content[j])}</span>;
    }}  
      
      //loop through array to get all the data from tags
      for (var e = 0; e < data.length; e++){
        console.log(data[e].tags);
        //return <span>{(data[i].content[j])}</span>;
      }
      
      
  }

  render() {
    
    return (
        <div>
          <p>content here</p>
          <p>{this.inputData()}</p>
        </div>
    );
  }
}

export default ContentPage;