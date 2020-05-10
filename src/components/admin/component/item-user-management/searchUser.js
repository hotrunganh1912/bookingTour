import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchData} from '../../../../action/adminManager';
import callApi from '../../../../common/callAPI';

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.inputSearch = React.createRef();
  }

  handleSearch = () => {
    let keyWord = this.inputSearch.current.value;
    callApi(`Users`, 'GET', null).then((res) => {
      if (res.data.length > 0) {
        this.props.handleSearch(keyWord, res.data);
      }
    });
  };

  onBack = () => {
    this.inputSearch.current.value = '';
    let keyWord = this.inputSearch.current.value;
    callApi(`Users`, 'GET', null).then((res) => {
      if (res.data.length > 0) {
        this.props.handleSearch(keyWord, res.data);
      }
    });
  };
  render() {
    let styleButtonBack = this.props.keyword ? {display: 'block'} : {display: 'none'};
    return (
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.onBack}
          style={styleButtonBack}
        >
          <i className="fas fa-arrow-circle-left"></i>
        </button>
        <input
          className="form-control mr-2"
          type="text"
          ref={this.inputSearch}
        />
        <button
          type="button"
          className="form-control btn btn-secondary"
          onClick={this.handleSearch}
        >
          <i className="fas fa-search"></i> Tìm Kiếm
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('keyword', state.searchUser);
  return {
    keyword: state.searchUser.keyword,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (keyword, data) => dispatch(searchData(keyword, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
