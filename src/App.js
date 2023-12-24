import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import { News } from './components/News';

export default class App extends Component {
  api_key=process.env.REACT_APP_API_KEY
  // api_key="a8de9c15f0194f3b92cca63f6a1b4c92"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
            <Route path="/home" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="home" pageSize={5} country='in' category='home' />} />
            <Route path="/business" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="business" pageSize={5} country='in' category='business' />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="entertainment" pageSize={5} country='in' category='entertainmemnt' />} />
            <Route path="/" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="general" pageSize={5} country='in' category='general' />} />
            <Route path="/health" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="health" pageSize={5} country='in' category='health' />} />
            <Route path="/science" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="science" pageSize={5} country='in' category='science' />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="sports" pageSize={5} country='in' category='sports' />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} api_key={this.api_key}  key="technology" pageSize={5} country='in' category='technology' />} />


          </Routes>
          {/* <News setProgress={this.setProgress} api_key={this.api_key}  pageSize={5} country='in' category='Sports'/> */}
        </Router>
      </div>
    )
  }
}
