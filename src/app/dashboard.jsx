import React from 'react'
import IpSize from './components/chart-ip-size'
import DataSize from './components/chart-data-size'
import ProtocolCount from './components/chart-protocol-count'
import { Col, Row } from 'antd'
import DashboardCards from './components/cards'
import ColumnStackChart from './components/column-chart'
import Tcp from './components/tcp'

const Dashboard = () => {
    return (
        <React.Fragment>
            <div style={{ marginBottom: '50px' }}>
                <DashboardCards />
            </div>
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
                <ColumnStackChart />
                <Tcp />
            </Row>
        </React.Fragment>
    )
}

export default Dashboard