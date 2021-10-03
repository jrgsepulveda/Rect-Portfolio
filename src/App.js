import React, { Component } from 'react';
import './App.css';
import Header from './Components/components/Header';
import Footer from './Components/components/Footer';
import About from './Components/components/About';
import Resume from './Components/components/Resume';
import Contact from './Components/components/Contact';
import Portfolio from './Components/components/Portfolio';
import axios from 'axios';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    axios.get('./resumeData.json')
    .then(response => {
      this.setState({resumeData: response.data})
    })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
