import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'


const customerTableHead = [
    'STT',
    'Booking code',
    'Số vé',
    'Tên sự kiện',
    'Tình trạng sử dụng',
    'Ngày sử dụng',
    'Ngày Xuất Vé',
    'Cổng Check-in'
    
]
// Cmt
const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.STT}</td>
        <td>{item.Bookingcode}</td>
        <td>{item.Sove}</td>
        <td>{item.Name}</td>
        <td>{item.Status}</td>
        <td>{item.Usedate}</td>
        <td>{item.Releasedate}</td>
        <td>{item.Checkin}</td>

    </tr>
)


const Ticket = () => {
    return (
        <div>
            <h2 className="page-header">
                Danh Sách Vé
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='6'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket
