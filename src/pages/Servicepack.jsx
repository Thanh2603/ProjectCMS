import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/service-list.json'


const customerTableHead = [
    'STT',
    'Mã gói',
    'Tên gói vé',
    'Ngày áp dụng',
    'Ngày hết hạn',
    'Giá vé (VNĐ/Vé)',
    'Giá combo (VNĐ/Combo)',
    'Tình Trạng'
    
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.STT}</td>
        <td>{item.Code}</td>
        <td>{item.Name}</td>
        <td>{item.Usedate}</td>
        <td>{item.Expirationdate}</td>
        <td>{item.Fare}</td>
        <td>{item.Comboprice}</td>
        <td>{item.Status}</td>

    </tr>
)


const Servicepack = () => {
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

export default Servicepack
