import React from "react";
import SearchBox from "../searchBox/searchBox";
import ListBoxTour from "../listTour/listBoxTour";
class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBox /> <ListBoxTour titleName="Tour Hot" />
        <ListBoxTour titleName="Giảm Giá" />
        <ListBoxTour titleName="Nước Ngoài" />
      </div>
    );
  }
}

export default Home;
