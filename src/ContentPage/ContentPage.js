import React, { Component } from 'react';
import data from './sampledata.json';

class ContentPage extends Component {
  render() {
    return (
        <div>
          <p>content here
            {
              function inputdata() {

              let newData = data;
              
               sampledata[0].content;
              // sampledata[0].title
              // sampledata[0].source
              // sampledata[0].tags
              const newCont = newData['content'];
              const newTitle = newData['title'];
              const newSrce = newData['source'];
              const newTags = newData['tags'];

                //loop through array to get all the data from title
	              for (let i = 0; i < newTitle.length; i++){

                  //create html elements for the title
                  const newTitle = document.createElement('h2');
                  //put the text content of title into the new elements
                  newTitle.textContent = newTitle[i].title;
                  }


	              for (let i = 0; i < newCont.length; i++){

                  const newPara = document.createElement('p');
                  const newLink = document.createElement('p');

                  newPara.textContent = newCont[i].paragraph;
                  newLink.textContent = newCont[i].link;
                  }
                

	              for (let i = 0; i < newSrce.length; i++){

                  const newPara = document.createElement('p');
                  newPara.textContent = newSrce[i].source;
                  }
                

	              for (let i = 0; i < newTags.length; i++){

                  const newDiv = document.createElement('div');
                  newDiv.textContent = newTags[i].tags;
                  }
                }
            }</p>
        </div>
    );
  }
}

export default ContentPage;