import React from "react";
import SearchBox from "../searchBox/searchBox";
import ListBoxTour from "../listTour/listBoxTour";
class Home extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.redirectParam);
  }
  render() {
    return (
      <div>
        <SearchBox />
        <ListBoxTour titleName="Tour Hot" styleTour="hot" />
        <ListBoxTour titleName="Giảm Giá" styleTour="discount" />
        <ListBoxTour titleName="Nước Ngoài" styleTour="foreign" />
      </div>
    );
  }
}

export default Home;
