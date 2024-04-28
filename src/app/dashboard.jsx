import React from 'react'
import IpSize from './components/chart-ip-size'
import DataSize from './components/chart-data-size'
import ProtocolCount from './components/chart-protocol-count'
import { Col, Row } from 'antd'

const Dashboard = () => {
    return (

        <Row gutter={12} >
            <Col span={8}>
                <IpSize />
            </Col>
            <Col span={8}>
                <DataSize />
            </Col>
            <Col span={8}>
                <ProtocolCount />
            </Col>
        </Row>
        // <div>
        //     <IpSize />
        //     <DataSize />
        //     <ProtocolCount />
        // </div>
    )
}

export default Dashboard