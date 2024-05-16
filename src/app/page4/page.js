"use client"
import SideBarMenu from '@/Components/MainSection/SideBarMenu/SideBarMenu'
import React, { useState } from 'react'
import { Button, Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
const page = () => {



    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <>
            <section>
                {   /* Container here we use */}
                <div className='container-fluid m-0 p-0'>
                    <div className='row g-0'>


                        {/* side bar menu section  */}

                        <div className='col-lg-2'>
                            <SideBarMenu />
                        </div>


                        {/* content section  */}

                        <div className='col-lg-10'>

                            <div>
                                <div
                                    style={{
                                        marginBottom: 16,
                                    }}
                                >
                                    <span
                                        style={{
                                            marginLeft: 8,
                                        }}
                                    >
                                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                                    </span>
                                </div>
                                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>)
}

export default page