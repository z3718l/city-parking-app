import React from 'react'
// import { TabBar } from 'antd-mobile';
import './footer.scss'
import {
  NavLink
} from "react-router-dom";


export default class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedTab: 'blueTab',
    //         hidden: false,
    //         fullScreen: false,
    //     };
    // }
    render () {
        return (
          <div className="footer-box">
            <span>
              <NavLink to="/home">首页</NavLink>
            </span>
            <span>
              <NavLink to="/parking">停车</NavLink>
            </span>
            <span>
              <NavLink to="/navigation">导航</NavLink>
            </span>
            <span>
              <NavLink to="/person">我的</NavLink>
            </span>
          </div>
            // <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
            //   <TabBar
            //     unselectedTintColor="#949494"
            //     tintColor="#33A3F4"
            //     barTintColor="white"
            //     hidden={this.state.hidden}
            //     tabBarPosition="top"
            //   >
            //       <TabBar.Item
            //         title="首页"
            //         key="首页"
            //         icon={<div style={{
            //           width: '22px',
            //           height: '22px',
            //           background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            //         />
            //         }
            //         selectedIcon={<div style={{
            //           width: '22px',
            //           height: '22px',
            //           background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            //         />
            //         }
            //         selected={this.state.selectedTab === 'blueTab'}
            //         badge={1}
            //         onPress={() => {
            //           this.setState({
            //             selectedTab: 'blueTab',
            //           });
            //         }}
            //         data-seed="logId"
            //       >
            //       </TabBar.Item>
                
            //     <TabBar.Item
            //       icon={
            //         <div style={{
            //           width: '22px',
            //           height: '22px',
            //           background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            //         />
            //       }
            //       selectedIcon={
            //         <div style={{
            //           width: '22px',
            //           height: '22px',
            //           background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            //         />
            //       }
            //       title="停车"
            //       key="停车"
            //       badge={'new'}
            //       selected={this.state.selectedTab === 'redTab'}
            //       onPress={() => {
            //         this.setState({
            //           selectedTab: 'redTab',
            //         });
            //       }}
            //       data-seed="logId1"
            //     >
            //     </TabBar.Item>
            //     <TabBar.Item
            //       icon={
            //         <div style={{
            //           width: '22px',
            //           height: '22px',
            //           background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            //         />
            //       }
            //       selectedIcon={
            //         <div style={{
            //           width: '22px',
            //           height: '22px',
            //           background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            //         />
            //       }
            //       title="导航"
            //       key="导航"
            //       dot
            //       selected={this.state.selectedTab === 'greenTab'}
            //       onPress={() => {
            //         this.setState({
            //           selectedTab: 'greenTab',
            //         });
            //       }}
            //     >
            //     </TabBar.Item>
            //     <TabBar.Item
            //       icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            //       selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            //       title="我的"
            //       key="我的"
            //       selected={this.state.selectedTab === 'yellowTab'}
            //       onPress={() => {
            //         this.setState({
            //           selectedTab: 'yellowTab',
            //         });
            //       }}
            //     >
            //     </TabBar.Item>
            //   </TabBar>
            // </div>
          )
    }
}
