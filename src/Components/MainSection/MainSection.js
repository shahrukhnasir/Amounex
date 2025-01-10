"use client";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Tabs, Spin, Carousel } from "antd";
import axios from "axios";
import SideBarMenu from "../MainSection/SideBarMenu/SideBarMenu";
import "../MainSection/SideBarMenu/SideBarStyles.css"; // Custom CSS file for styling

const { Text, Title } = Typography;
const { TabPane } = Tabs;

const MainSection = () => {
  const [matches, setMatches] = useState([]);
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          "https://api.cricapi.com/v1/cricScore?apikey=820df9e2-d339-4300-becf-a48b17efb741"
        );
        const allMatches = response.data.data || [];
        setMatches(allMatches);
        setLiveMatches(allMatches.filter((match) => match.status.toLowerCase().includes("live")));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch match data.");
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  // Categorize matches by matchType
  const categorizeMatches = (matches) => {
    const categories = {};
    matches.forEach((match) => {
      if (!categories[match.matchType]) {
        categories[match.matchType] = [];
      }
      categories[match.matchType].push(match);
    });
    return categories;
  };

  const categorizedMatches = categorizeMatches(matches);

  const renderMatches = (matches) =>
    matches.map((match) => (
      <Col xs={24} sm={12} md={8} lg={6} key={match.id}>
        <Card
          hoverable
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          bodyStyle={{ padding: "16px" }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <img
              src={match.t1img}
              alt={match.t1}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "50%",
                marginRight: "12px",
              }}
            />
            <Text strong>{match.t1}</Text>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <img
              src={match.t2img}
              alt={match.t2}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "50%",
                marginRight: "12px",
              }}
            />
            <Text strong>{match.t2}</Text>
          </div>
          <Text type="secondary">
            {new Date(match.dateTimeGMT).toLocaleDateString()} • {match.status}
          </Text>
        </Card>
      </Col>
    ));

  const renderLiveMatches = () =>
    liveMatches.map((match) => (
      <div
        key={match.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#ff4d4f",
          color: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          margin: "0 10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={match.t1img}
            alt={match.t1}
            style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "16px" }}
          />
          <Title level={4} style={{ margin: 0 }}>
            {match.t1} vs {match.t2}
          </Title>
        </div>
        <div>
          <Text style={{ fontSize: "16px", fontWeight: "bold" }}>{match.status}</Text>
        </div>
      </div>
    ));

  return (
    <section>
      <div className="container-fluid m-0 p-0">
        <div className="row g-0">
          {/* Sidebar */}
          <div className="col-lg-2">
            <SideBarMenu />
          </div>

          {/* Main Content */}
          <div className="col-lg-10 p-4">
            {/* Live Streaming Section */}
            {liveMatches.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <Title level={3} style={{ textAlign: "center", marginBottom: "16px" }}>
                  Live Streaming Matches
                </Title>
                <Carousel autoplay dots={false} autoplaySpeed={3000} style={{ borderRadius: "8px" }}>
                  {renderLiveMatches()}
                </Carousel>
              </div>
            )}

            <h1>World Cup Matches</h1>

            {loading ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <Spin size="large" />
              </div>
            ) : error ? (
              <Text type="danger">{error}</Text>
            ) : (
              <Tabs
                defaultActiveKey="T20"
                type="card"
                className="custom-tabs" // Custom class for tabs styling
              >
                {Object.keys(categorizedMatches).map((type) => (
                  <TabPane tab={type.toUpperCase()} key={type}>
                    <Row gutter={[16, 16]}>{renderMatches(categorizedMatches[type])}</Row>
                  </TabPane>
                ))}
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
