"use client"
import React, { useState } from 'react'
import "../ContentMenu/ContentMenuStyles.css"
import ReactFlagsSelect from "react-flags-select";
import { UploadOutlined } from '@ant-design/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Row, Space, Upload } from 'antd'
import Search from 'antd/es/transfer/search'
import Image from 'next/image'
import ExpenseCard from '@/Components/ExpenseCard/ExpenseCard';
import { Chart } from "react-google-charts";
import TotalRevenu from '@/Components/Charts/TotalRevenu';
import CustomerSatisfaction from '@/Components/Charts/CustomerSatisfaction';
import GeoCharts from '@/Components/Charts/GeoCharts';
import VisitorInsights from '@/Components/Charts/VisitorInsights';
import PieChart from '@/Components/Charts/PieChart';
import AnimatedChart from '@/Components/Charts/AnimatedChart';
const ContentMenu = () => {

  // select country 
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [select, setSelect] = useState("US");
  const onSelect = (code) => setSelect(code);



  // uploads
  const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  // card data
  const data = [
    {
      id: 1,
      price: '$1k',
      exp: "Total Expense",
      day: "+8% from yesterday",
      color: '#FFE2E5'
    },
    {
      id: 2,
      price: '300',
      exp: "Total Items",
      day: "+5% from yesterday",
      color: '#FFF4DE'
    }, {
      id: 3,
      price: '5',
      exp: "Items Purchase",
      day: "+1,2% from yesterday",
      color: '#DCFCE7'
    },
    {
      id: 4,
      price: '8',
      exp: "New Customers",
      day: "0,5% from yesterday",
      color: '#F3E8FF'
    },

  ];

  return (
    <>
      <section className='right_section'>

        <div className='top_secion'>
          <div className="slider-container">

            <div className='row'>
              <div className='col-lg-4 my-auto'>
                <h1 className='dashBoard'>
                  Dashboard
                </h1>
              </div>

              <div className='col-lg-5'>
                <Search
                  placeholder="Search"
                  allowClear
                  onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                />
              </div>
              <div className='col-lg-2'>
                <ReactFlagsSelect
                  selected={select}
                  onSelect={onSelect}
                  countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
                />
              </div>
              <div className='col-lg-1'>
                <div className='notification_img'>
                  <Image
                    src="/assets/images/Notifications.png"
                    width={50}
                    height={50}
                    alt='notification img'
                  />
                </div>
              </div>

            </div>

          </div>
        </div>



        {/* <div className='chartSection'> */}

        {/* Today’s Expense */}
        <Space className=''>
          <Row>
            <Col span={12}>

              <div className='expense_section'>

                <Row>
                  <Col span={8}>
                    <h4 className='heading'>Today’s Expense</h4>
                    <p>Expense Summery</p>
                  </Col>
                  <Col span={8} offset={8}>
                    <Upload {...props} className='ant-upload'>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Col>
                </Row>
                <Row>
                  {data?.map((item, i) => (
                    <ExpenseCard
                      key={i}
                      bgColor={item?.color}
                      day={item?.day}
                      expense={item?.exp}
                      price={item?.price}
                    />
                  ))}
                </Row>
              </div>
            </Col>
            {/* Visitor Insights */}


            <Col span={12}>
              <div className='comman_style'>
                <VisitorInsights />

              </div>
            </Col>
          </Row>





        </Space>

        <Row>
          <Col span={12}>
            <div className='revenu_chart'>

              <TotalRevenu />

            </div>
          </Col>
          <Col span={12}>
            <div className='map_chart'>
              <GeoCharts />
            </div>


          </Col>
        </Row>


        <Row>


          <Col span={12}>
            <div className='pieChart'>
              <PieChart />
            </div>


          </Col>


          <Col span={12}>
            <div className='custSatisfaction'>
              <CustomerSatisfaction />
            </div>


          </Col>
        </Row>




        {/* </div> */}


      </section >
    </>
  )
}

export default ContentMenu;