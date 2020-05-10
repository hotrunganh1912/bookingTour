import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { formCurencyVN } from '../../../../common/funcCommon';
import callApi from '../../../../common/callAPI';

class ItemDetailBooking extends Component {
  render() {
    const {data, index} = this.props;
    let statusName = data.status === 'paid' ? 'Đã Thanh Toán' : 'Hủy Bỏ';
    let statusClass = data.status === 'paid'
      ? 'bg-warning p-2 text-white'
      : 'bg-danger p-2 text-white';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{data.nameTour}</td>
        <td>
          <span className="text-danger" style={{fontSize: '1.2rem'}}>
            {formCurencyVN(data.sumPrice)}
          </span>
        </td>
        <td>{new Date(data.time).toLocaleDateString('en-GB')}</td>
        <td>{new Date(data.timeChose).toLocaleDateString('en-GB')}</td>
        <td className="my-auto">
          <span className={statusClass}>{statusName}</span>
        </td>
        <td>
          <Link to={`/admin/detail-booked-bill/${data.id}`} className="btn btn-info ml-2">
            Chi Tiết
          </Link>
        </td>
      </tr>
    );
  }
}

export default ItemDetailBooking;
