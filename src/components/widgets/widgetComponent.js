import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TableWrapper from "./tableWrapper";
import ProgressBar from "./progressBar";

const WidgetComponent = (props) => {

  const { loading, heading, data, selectedWidget, history } = props;

  const [sortType, setSortType] = useState("value")

  const onChange = e =>{
    setSortType(e.target.value)
  }

  const updateUrl = (type) =>{
    if(selectedWidget == type){
      history.push('')
    }else{
      history.push('?selectedWidget='+type)
    }
  }

  return (
    <div className={`widget-container ${selectedWidget ? "highlight": ""}`}>
      <div className="header">
        <h2>{heading}</h2>
        <div className="header-action">
          <select onChange={onChange}>
            <option value="label" selected={sortType=="label"}>Sort By Label</option>
            <option value="value" selected={sortType=="value"}>Sort By Value</option>
          </select>
          <div className="" onClick={()=> updateUrl(heading)}>
            <i className="fa fa-arrows-alt"></i>
          </div>
        </div>
      </div>
      <div className="container-body">
        <div className="data">
          <h4>STATS</h4>
          {
            data.stats &&
            Object.keys(data.stats).map((item, key) => {
              return (
                <ProgressBar {...data.stats[item]} />
              )
            })
          }
          <a href="/">
            <span>View API</span>
            <span className="fa fa-arrow-right fa-lg"></span>
          </a>
        </div>
        <div className="info">
          <TableWrapper sortType={sortType} filter={data.filter} dataSet={data.dataSet} />
        </div>
      </div>
    </div>
  );

}

WidgetComponent.propTypes = {
  heading: PropTypes.func.isRequired,
  data: PropTypes.array,
  selectedWidget: PropTypes.string,
  history: PropTypes.object.isRequired
};

WidgetComponent.defaultProps = {
  selectedWidget: null
}

export default WidgetComponent