import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/widgetActions';
import PropTypes from 'prop-types';

import WidgetComponent from "./widgetComponent";

const WidgetList = (props) => {
  const { data, loading, history, fetchData } = props;

  useEffect(() => {
    fetchData();
  });

  const getQueryParam = (search, paramName) => {
    let params = new URLSearchParams(search);
    return params.get(paramName);
  }

  const selectedWidget = history && history.location && history.location.search ? getQueryParam(props.history.location.search, "selectedWidget") : null;

  return (
    <div className="main-container">
      {
        data.filter(i => {return selectedWidget ? i.heading == selectedWidget : i} ).map((item, key) => {
          return (
            <WidgetComponent key={key} loading={loading} {...item} selectedWidget={selectedWidget} history={history} />
          )
        })
      }
    </div>
  );
}

WidgetList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps,
  {
    fetchData
  }
)(WidgetList);