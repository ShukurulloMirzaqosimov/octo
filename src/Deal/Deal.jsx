import React from "react";
import "./Deal.css";
import gray from "./gray.png";
import { FaCalendar } from "react-icons/fa";
const Deal = () => {
  return (
    <div className="deal">
      <div className="up_section">
        <h3 className="best_section">| Best Deal</h3>
        <h1 className="best_section_h1">
          Find Your Best Deal <br /> Rigth Now!
        </h1>
        <div className="btns">
          <button className="btn1">Appaprtment</button>

          <button className="btn2">Villa House</button>

          <button className="btn3">PentHouse</button>
        </div>
      </div>
      <div className="big">
        <div className="three_categories">
          <div className="fist_card_deal">
            <div className="ff1">
              <p>
                Total Flat Sapace ㅤㅤㅤㅤㅤㅤ
                <span className="secured">185 m2</span>
              </p>
              <hr className="hrr" />
            </div>
            <div className="ff2">
              <p>
                Floor number ㅤㅤㅤㅤㅤㅤㅤㅤ
                <span className="secured">26 th</span>
              </p>
              <hr className="hrr" />
            </div>
            <div className="ff3">
              <p>
                Number of rooms ㅤㅤㅤㅤㅤㅤㅤㅤ
                <span className="secured">4</span>
              </p>
              <hr className="hrr" />
            </div>
            <div className="ff4">
              <p>
                Parking Avialable ㅤㅤㅤㅤㅤㅤㅤㅤ
                <span className="secured">Yes</span>
              </p>
              <hr className="hrr" />
            </div>
            <div className="ff5">
              <p>
                Payment Process ㅤㅤㅤㅤㅤㅤㅤ
                <span className="secured">Bank</span>
              </p>
              <hr className="hrr" />
            </div>
          </div>
        </div>
        <div className="beetwen_img">
          <img src={gray} alt="" />
        </div>

        <div className="deal_content">
          <h3>Extra Info About Property</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur<br /> 
            obcaecati maxime placeat quae minima<br /> 
            architecto voluptatem esse quisquam<br /> 
            inventore tempore assumenda facere<br /> 
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur<br /> 
            obcaecati maxime placeat quae minima<br /> 
            architecto voluptatem esse quisquam<br /> 
            inventore tempore assumenda facere<br /> 
          </p>
          <button className="btnn">Schedule a Visit</button>
          <div className="kalendar">
          <FaCalendar className='kk' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
