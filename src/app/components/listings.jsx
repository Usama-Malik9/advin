import React from 'react';
import { Card, Row, Col } from 'antd';
import { FaMobile } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { MdSmartScreen } from "react-icons/md";
import { GrServers } from "react-icons/gr";
import { BsRouter } from "react-icons/bs";
import { IoDesktopSharp } from "react-icons/io5";

const DeviceCards = () => {
    const dummyData = [
        { device: 'Laptop', name: 'Laptop 1', ip: '192.168.1.101' },
        { device: 'Desktop', name: 'Desktop 1', ip: '192.168.1.102' },
        { device: 'Mobile', name: 'Mobile 1', ip: '192.168.1.103' },
        { device: 'Laptop', name: 'Laptop 2', ip: '192.168.1.104' },
        { device: 'Desktop', name: 'Desktop 2', ip: '192.168.1.105' },
        { device: 'Mobile', name: 'Mobile 2', ip: '192.168.1.106' },
        { device: 'Server', name: 'Laptop 3', ip: '192.168.1.107' },
        { device: 'Router', name: 'Desktop 3', ip: '192.168.1.108' },
        { device: 'plc', name: 'Mobile 3', ip: '192.168.1.109' },
        { device: 'hmi', name: 'Laptop 4', ip: '192.168.1.110' },
    ];
    const dummyData2 = [
        { device: 'Laptop', name: 'Laptop 1', ip: '192.168.1.101' },
        { device: 'Desktop', name: 'Desktop 1', ip: '192.168.1.102' },
        { device: 'Mobile', name: 'Mobile 1', ip: '192.168.1.103' },
        { device: 'Laptop', name: 'Laptop 2', ip: '192.168.1.104' },
        { device: 'Desktop', name: 'Desktop 2', ip: '192.168.1.105' },
        { device: 'Mobile', name: 'Mobile 2', ip: '192.168.1.106' },
        { device: 'Server', name: 'Laptop 3', ip: '192.168.1.107' },
        { device: 'Router', name: 'Desktop 3', ip: '192.168.1.108' },
        { device: 'plc', name: 'Mobile 3', ip: '192.168.1.109' },
        { device: 'hmi', name: 'Laptop 4', ip: '192.168.1.110' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '30px', marginBottom: '10px' }}>Level 1</h1>
            <Row gutter={[16, 16]}>
                {dummyData.slice(0, 6).map((item, index) => (
                    <Col span={4} key={index}>
                        <Card hoverable style={{ backgroundColor: 'lightblue' }}>
                            {item.device === 'Laptop' && <FaLaptop color="black" style={{ fontSize: '36px' }} />}
                            {item.device === 'Desktop' && <IoDesktopSharp style={{ fontSize: '36px' }} />}
                            {item.device === 'Mobile' && <FaMobileAlt style={{ fontSize: '36px' }} />}
                            {item.device === 'Server' && <FaServer color="black" style={{ fontSize: '36px' }} />}
                            {item.device === 'Router' && <BsRouter style={{ fontSize: '36px' }} />}
                            {item.device === 'plc' && <GrServers style={{ fontSize: '36px' }} />}
                            {item.device === 'hmi' && <MdSmartScreen style={{ fontSize: '36px' }} />}
                            <p>{item.name}</p>
                            <p>{item.ip}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                {dummyData.slice(5, 11).map((item, index) => (
                    <Col span={4} key={index}>
                        <Card hoverable style={{ backgroundColor: 'lightblue' }}>
                            {item.device === 'Laptop' && <FaLaptop style={{ fontSize: '36px' }} />}
                            {item.device === 'Desktop' && <IoDesktopSharp style={{ fontSize: '36px' }} />}
                            {item.device === 'Mobile' && <FaMobileAlt style={{ fontSize: '36px' }} />}
                            {item.device === 'Server' && <FaServer color="black" style={{ fontSize: '36px' }} />}
                            {item.device === 'Router' && <BsRouter style={{ fontSize: '36px' }} />}
                            {item.device === 'plc' && <GrServers style={{ fontSize: '36px' }} />}
                            {item.device === 'hmi' && <MdSmartScreen style={{ fontSize: '36px' }} />}
                            <p>{item.name}</p>
                            <p>{item.ip}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h1 style={{ fontSize: '30px', marginBottom: '10px' }}>Level 2</h1>
            <Row gutter={[16, 16]}>
                {dummyData2.slice(0, 6).map((item, index) => (
                    <Col span={4} key={index}>
                        <Card hoverable style={{ backgroundColor: 'lightblue' }}>
                            {item.device === 'Laptop' && <FaLaptop color="black" style={{ fontSize: '36px' }} />}
                            {item.device === 'Desktop' && <IoDesktopSharp style={{ fontSize: '36px' }} />}
                            {item.device === 'Mobile' && <FaMobileAlt style={{ fontSize: '36px' }} />}
                            {item.device === 'Server' && <FaServer color="black" style={{ fontSize: '36px' }} />}
                            {item.device === 'Router' && <BsRouter style={{ fontSize: '36px' }} />}
                            {item.device === 'plc' && <GrServers style={{ fontSize: '36px' }} />}
                            {item.device === 'hmi' && <MdSmartScreen style={{ fontSize: '36px' }} />}
                            <p>{item.name}</p>
                            <p>{item.ip}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                {dummyData2.slice(5, 11).map((item, index) => (
                    <Col span={4} key={index}>
                        <Card hoverable style={{ backgroundColor: 'lightblue' }}>
                            {item.device === 'Laptop' && <FaLaptop style={{ fontSize: '36px' }} />}
                            {item.device === 'Desktop' && <IoDesktopSharp style={{ fontSize: '36px' }} />}
                            {item.device === 'Mobile' && <FaMobileAlt style={{ fontSize: '36px' }} />}
                            {item.device === 'Server' && <FaServer color="black" style={{ fontSize: '36px' }} />}
                            {item.device === 'Router' && <BsRouter style={{ fontSize: '36px' }} />}
                            {item.device === 'plc' && <GrServers style={{ fontSize: '36px' }} />}
                            {item.device === 'hmi' && <MdSmartScreen style={{ fontSize: '36px' }} />}
                            <p>{item.name}</p>
                            <p>{item.ip}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    );
};

export default DeviceCards;
