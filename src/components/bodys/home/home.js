import React from "react";
import SearchBox from "../searchBox/searchBox";
import ListBoxTour from "../listTour/listBoxTour";
class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBox {...this.props} />
        <ListBoxTour titleName="Tour Hot" styleTour="hot" />
        <ListBoxTour titleName="Giảm Giá" styleTour="discount" />
        <ListBoxTour titleName="Nước Ngoài" styleTour="foreign" />
      </div>
    );
  }
}

export default Home;
