import React from 'react';
import PropTypes from 'prop-types';

const sortTypes = {
	"label": {
		fn: (a, b) => {
      if(a.label < b.label) { return -1; }
      if(a.label > b.label) { return 1; }
      return 0;
    }
	},
	"value": {
		fn: (a, b) => a.value - b.value
	},
};

const TableWrapper = (props) => {
  const { filter, dataSet, sortType } = props;

  return (
    <div className="right-container">
      <div className="t-header">
        <div className="title">
          {filter.label}
        </div>
        <div className="value">
          {filter.value}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {
              dataSet.header.map((item) => {
                return(
                  <th key={item}>{item}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
        {
          dataSet.data.sort(sortTypes[sortType].fn).map((item) => {
            return(
              <tr key={item.label} style={{ color: item.color }}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
    </div>
  );

}

TableWrapper.propTypes = {
  filter: PropTypes.object, 
  dataSet: PropTypes.object,
};

TableWrapper.defaultProps = {
  filter: {},
  dataSet: {
    header: [],
    data: []
  }
};

export default TableWrapper