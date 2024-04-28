import React from 'react';
import { Card, Typography } from 'antd';
import { FaThList } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { SiWebpack } from "react-icons/si";


const { Text } = Typography;

const DashboardCards = () => {
    const icons = [<FaThList size={50} color="green" />, <FaNetworkWired size={50} color="red" />, <FcProcess size={50} color="blue" />, <SiWebpack size={50} color="orange" />];
    const texts = ["Assets", "Networks", "Processes", "Protocols"];
    const numbers = ["140", "190", "160", "103"];

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {icons.map((icon, index) => (
                <Card key={index} style={{ width: "300px", height: "150px", backgroundColor: "lightblue", marginBottom: "20px" }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                        {icon}
                        <Text style={{ marginLeft: '15px', fontSize: '30px' }}>{texts[index]}</Text>
                    </div>
                    <div style={{ display: 'flex', textAlign: "center", justifyContent: 'center', marginTop: '15px', fontSize: '25px', fontWeight: 'bold' }}>
                        <Text>Total Count:  {numbers[index]}</Text>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default DashboardCards;
