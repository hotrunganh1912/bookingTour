import React, { Component } from 'react';
import {connect} from 'react-redux';
import { searchData } from '../../../../action/adminManager';
import callApi from '../../../../common/callAPI';

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.inputSearch = React.createRef();
    }

    handleSearch = () => {
        let keyWord = this.inputSearch.current.value;
        callApi(`Users`, 'GET', null).then(res => {
            if(res.data.length > 0) {
                this.props.handleSearch(keyWord, res.data)
            }
        });
    };
    render() {
        return (
            <div className="d-flex">
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
                    <i className="fas fa-search"></i> Search
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: (keyword, data) => dispatch(searchData(keyword, data)),
    };
};

export default connect(null, mapDispatchToProps)(SearchUser);