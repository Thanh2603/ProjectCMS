import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/product-list.json'

// Checking page

const customerTableHead = [
    'STT',
    'Số vé',
    'Ngày sử dụng',
    'Tên loại vé',
    'Cổng Check-in'
    
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.STT}</td>
        <td>{item.Sove}</td>
        <td>{item.Usedate}</td>
        <td>{item.Name}</td>
        <td>{item.Checkin}</td>
        <td>{item.None}</td>

    </tr>
)


const Checking = () => {
    return (
        <div>
            <h2 className="page-header">
                Đối Soát Vé
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

export default Checking
