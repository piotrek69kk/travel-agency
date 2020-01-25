import React from 'react';
import styles from './OrderOption.scss';
// import { formatPrice } from '../../../utils/formatPrice';
// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };
  
  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <div className={styles.number}>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default OrderOptionDate;