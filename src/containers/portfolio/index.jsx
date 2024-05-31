import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GrProjects } from "react-icons/gr";
import "./styles.scss";
import { portfolioData } from "../../utils/portfolioData";

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(i){
    setHoveredValue(i);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<GrProjects size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              key={item.filterId}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio_content_cards">
          {filteredItems.map((item, i) => (
            
            <div
              className="portfolio_content_cards_item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={()=>handleHover(i)}
              onMouseLeave={()=>handleHover(null)}
            >
              <div className="portfolio_content_cards_item_img">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              
              <div className="overlay">
                { 
                  i === hoveredValue ? (
                    <div>
                      <p>{item.name}</p>
                      <a href={item.link} target="_blank">
                        <button >Visit</button>
                      </a>
                    </div>
                  ) : ""
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
