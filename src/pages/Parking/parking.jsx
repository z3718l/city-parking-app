import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
export default class Parking extends React.Component{
    render () {
        return (
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.go(-1) }}
                >停车</NavBar>
                <div>
                    停车
                </div>
            </div>
        )
    }
}