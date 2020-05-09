import React, {Component} from 'react';
import { formCurencyVN } from '../../../../common/funcCommon';

class ItemBookingManagement extends Component {
  render() {
      const { dataBooking, index } = this.props;
    return (
      <tr>
        <td>{index+1}</td>
        <td>{dataBooking.userName}</td>
        <td className="card w-25 mx-auto mt-1 text-white" style={{backgroundColor: `${dataBooking.color}`}}>{dataBooking.tourBooked}</td>
        <td style={{fontSize: '1.2rem', color: '#ff6084eb'}}>{formCurencyVN(dataBooking.total)}</td>
        <td>
          <button
            type="button"
            className="btn btn-info ml-2"
          >
            Detail
          </button>
        </td>
      </tr>
    );
  }
}

export default ItemBookingManagement;
