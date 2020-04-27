import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setDataSearch} from '../../../action/search';
import {withRouter} from 'react-router-dom';

class ShowTour extends Component {
  getDataStyleTour = (name) => {
    let styleTour = '';
    switch (name) {
      case 'Tour Hot':
        return (styleTour = 'hot');
      case 'Giảm Giá':
        return (styleTour = 'discount');
      case 'Nước Ngoài':
        return (styleTour = 'foreign');
      default:
        break;
    }
  };

  getDataAndDispatch = () => {
    let data = {
      q: '',
      typeTour: this.getDataStyleTour(this.props.dataShow.title),
      dateStart: '',
    };
    this.props.getDataSearch(data);
    return this.props.history.push('/tour');
  };
  render() {
    const {dataShow} = this.props;
    return (
      <div className="o-dl dltn" onClick={this.getDataAndDispatch}>
        <img src={dataShow.img} className="iconT-i-c1" />
        <p className="text1">Tìm tour</p>
        <p className={`text2 text-dltn ${dataShow.textColor}`}>
          {dataShow.title}
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataSearch: (data) => dispatch(setDataSearch(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ShowTour));
