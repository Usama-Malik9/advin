import React, { useRef, useState } from 'react';
import { Table, Pagination, Space, Tooltip, Button, Input } from 'antd';
import { IoSettings } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";
import { FaCloud } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { SearchOutlined } from '@ant-design/icons';

const ProcessTable = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState();
    const searchInput = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 15;
    const totalRecords = 50;


    const handleSearch = (
        selectedKeys,
        confirm,
        dataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilter) => {
        clearFilter({ confirm: true })
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Enter Record to Search `}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90, backgroundColor: '#3296d9' }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 50 }}
                    >
                        Reset
                    </Button>
                    <Button
                        size="small"
                        style={{ width: 50 }}
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} color="#1677ff" />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },

    });

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    let data = [
        // {address:"dhd",labels:''},
        // {},
    ];
    for (let i = 0; i < totalRecords; i++) {
        data.push({
            key: i,
            actions: `Action ${i + 1}`,
            address: `Address ${i + 1}`,
            labels: `Label ${i + 1}`,
            rules: `Rule ${i + 1}`,
            macAddress: `MAC${i + 1}`,
            sentBytes: Math.floor(Math.random() * 1000),
            receivedBytes: Math.floor(Math.random() * 1000),
            link: `link ${i + 1}`,
            protocol: `191.2.3.${i + 1}`
        });
    }
    console.log(data)

    const columns = [
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: () => {
                return (
                    <div style={{ display: 'flex' }}>
                        <Space size="small">
                            <Tooltip title="Lists"><FaList color="black" size={15} /></Tooltip>
                            <Tooltip title="Setting"><IoSettings color="gray" size={15} /></Tooltip>
                            <Tooltip title="Warnings"><IoIosWarning color="orange" size={15} /></Tooltip>
                            <Tooltip title="Active"> <BsFillLightningFill color="skyblue" size={15} /></Tooltip>
                            <Tooltip title="Upload"><FaCloud color="lightblue" size={15} /></Tooltip>
                            <Tooltip title="Forward"><RiShareForwardFill color="green" size={15} /></Tooltip>
                        </Space>
                    </div>
                )
            }
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (text) => (
                <span style={{ color: 'blue', textDecoration: 'underline' }}>{text}</span>
            ),
            ...getColumnSearchProps("address"),
        },
        {
            title: 'Labels',
            dataIndex: 'labels',
            key: 'labels',
            ...getColumnSearchProps("labels"),
        },
        {
            title: 'Rules',
            dataIndex: 'rules',
            key: 'rules',
            ...getColumnSearchProps("rules"),
        },
        {
            title: 'MAC Address',
            dataIndex: 'macAddress',
            key: 'macAddress',
            ...getColumnSearchProps("macAddress"),
        },
        {
            title: 'Sent Bytes',
            dataIndex: 'sentBytes',
            key: 'sentBytes',
            ...getColumnSearchProps("sentBytes"),
        },
        {
            title: 'Received Bytes',
            dataIndex: 'receivedBytes',
            key: 'receivedBytes',
            ...getColumnSearchProps("receivedBytes"),
        },
        {
            title: "Link",
            dataIndex: 'link',
            key: 'link',
            ...getColumnSearchProps("link"),
        },
        {
            title: "Protocol",
            dataIndex: 'protocol',
            key: 'protocol',
            ...getColumnSearchProps("protocol"),
        }
    ];
    return (
        <div>
            <Table
                className="ui-table-sm ui-table-border-none"
                columns={columns}
                dataSource={data?.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                pagination={false}
            />
            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalRecords}
                    onChange={handleChangePage}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
};

export default ProcessTable;
