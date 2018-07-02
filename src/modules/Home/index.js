import React, { Component } from 'react';
import { Tabs, Radio, Button } from 'antd';
import './index.css'
// import { observer, inject } from 'mobx-react';
const TabPane = Tabs.TabPane;
// @inject('todolist')
// @observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'left'
    }
  }
  handleModeChange(e){
    const mode = e.target.value
    this.setState({mode})
  }
  clickbutton(e){
    // let buttonValue = this.refs.button.innerHTML
    let buttonValue = e.target.innerHTML
    console.log(buttonValue)
  }
  render() {
    const { mode } = this.state;
    return (
      <div>
        <h2>Home</h2>
        {/* <Radio.Group onChange={this.handleModeChange.bind(this)} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs
          className="tabs"
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 220 }}
        >
          <TabPane tab="Tab 1" key="1">
            <button onClick={this.clickbutton.bind(this)} ref="button">点击</button>
          </TabPane>
          <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
          <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
        </Tabs> */}

      </div>
    );
  }
}

export default {
  component: Home,
  onEnter: (nextState,replaceState) => {
    if(!localStorage.getItem('test')){
      replaceState({
        pathname: '/login'
      })
    }
  }
}
