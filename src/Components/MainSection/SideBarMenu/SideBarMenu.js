'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../SideBarMenu/SideBarStyles.css';
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { TfiHeart } from 'react-icons/tfi';
import { MdDashboard } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";

const SideBarMenu = () => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  const [activeAccordion, setActiveAccordion] = useState(null); // Initialize activeAccordion state

  const handleToggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  // Custom PDF label component
  // const PdfLabel = () => (

  //   <span>
  //     PDF <RiArrowDropDownLine />
  //   </span>
  // );
  const Menu = [
    {
      icon: <MdDashboard />,
      label: 'Dashboard',
      route: '/page1',
    },
    {
      icon: <MdOutlineLeaderboard />,
      label: 'Leaderboard',
      route: '/page2',
      title: 'LINK'
    },
    {
      icon: <IoCartOutline />,
      label: 'Order',
      route: '/page3',

    },
    {
      icon: <BiCartAdd />,
      label: 'Products',
      route: '/page4',
    },
    {
      icon: <FaChartLine />,
      label: 'Sales Report',
      route: '/page5',
    },
    {
      icon: <RiMessage2Line />,
      label: 'Messages',
      route: '/page6',
    },
    {
      icon: <IoSettingsOutline />,
      label: 'Settings',
      route: '/page7',
    },
    {
      icon: <PiSignOut />,
      label: 'Sign Out',
      route: '/page8',
    },
  ];

  return (
    <section className="side_menu_section">
      <div className="inner_section">
        <div className="top">
          <div className="logo_box">
            <span><img src={'/assets/images/logo.png'} className="img-fluid" alt="" /></span>
            <span><small className="smallText"> Amounex</small></span>
            
          </div>
        </div>

        <div className="sideBarMenu">
          {Menu.map((menu, i) => (
            <div key={i} className={pathname === menu.route ? 'active' : ''}>
              <Link href={menu.route}>
                <div className="sidemenu">
                  <span className="menuIcon">{menu?.icon}</span>
                  <div className="d-flex justify-align-content-between">
                    <span className="label">{menu?.label}</span>
                  </div>
                </div>
              </Link>

              {menu?.title === 'PDF' && pathname === menu.route && toggleMenu && (
                <div className="dropDown">
                  <ul className='unOrderList'>
                    < li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li><li className='list'>
                      <span >Bewirtschaftung einer Immobilie</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* profile */}


        <div class="card_profile" >
          <div class="card_info">
            <h2>Amounex</h2>
            <p>Get access to all </p>
            <p> features on playstore</p>
          </div>
          <div className='card_etc'>

            <span>Download</span>
          </div>
        </div>


        <div className='bottom_text'>
          <span>Impressum & Datenschutzcenter</span>
        </div>
      </div>
    </section>
  );
};

export default SideBarMenu;
