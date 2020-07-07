import React, { Component } from 'react';
import data from '../sampledata.json';

class ContentPage extends Component {

  inputData() {
    console.log(data[1].content[0].paragraph)

    // for( each item in data)
    //     data(i).content
    //data[4].content
    //      data(i). title
    //      data(i). sources

    // for each item in data(i.content)

    // <h>  data(i).content(j) </h>
    
    return "test"
    // sampledata[0].title
    // sampledata[0].source
    // sampledata[0].tags
    // const newCont = data['content'];
    // const newTitle = data['title'];
    // const newSrce = data['source'];
    // const newTags = data['tags'];

    //   //loop through array to get all the data from title
    //   for (let i = 0; i < newTitle.length; i++){

    //     //create html elements for the title
    //     const newTitle = document.createElement('h2');
    //     //put the text content of title into the new elements
    //     newTitle.textContent = newTitle[i].title;
    //     }

    // return(<h2>test</h2>)


    //   for (let i = 0; i < newCont.length; i++){

    //     const newPara = document.createElement('p');
    //     const newLink = document.createElement('p');

    //     newPara.textContent = newCont[i].paragraph;
    //     newLink.textContent = newCont[i].link;
    //     }
      

    //   for (let i = 0; i < newSrce.length; i++){

    //     const newPara = document.createElement('p');
    //     newPara.textContent = newSrce[i].source;
    //     }
      

    //   for (let i = 0; i < newTags.length; i++){

    //     const newDiv = document.createElement('div');
    //     newDiv.textContent = newTags[i].tags;
    //     }

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