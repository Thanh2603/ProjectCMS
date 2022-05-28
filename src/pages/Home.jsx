import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Vé đã sử dụng',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Vé chưa sử dụng',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'Số Vé',
        'Ngày Sử Dụng',
        'Ngày Xuất Vé'
    ],
    body: [
        {
            "username": "123456789034",
            "order": "14/04/2021",
            "price": "14/04/2021"
        },
        {
            "username": "236784631642",
            "order": "14/04/2021",
            "price": "14/04/2021"
        },
        {
            "username": "487621489474",
            "order": "14/04/2021",
            "price": "14/04/2021"
        },
        {
            "username": "156464891479",
            "order": "14/04/2021",
            "price": "14/04/2021"
        },
        {
            "username": "201649631896",
            "order": "14/04/2021",
            "price": "14/04/2021"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "Số Vé",
        "Ngày Sử Dụng",
        "Ngày Xuất Vé",
        "Cổng Check-in",
        "Tình Trạng Sử Dụng"
    ],
    body: [
        {
            id: "123456789034",
            user: "14/04/2021",
            date: "Cổng 1",
            price: "14/04/2021",
            status: "Đã Sử Dụng"
        },
        {
            id: "236784631642",
            user: "14/04/2021",
            date: "Cổng 1",
            price: "14/04/2021",
            status: "Chưa Sử Dụng"
        },
        {
            id: "487621489474",
            user: "14/04/2021",
            date: "Cổng 1",
            price: "14/04/2021",
            status: "Hết Hạn"
        },
        {
            id: "156464891479",
            user: "14/04/2021",
            date: "Cổng 1",
            price: "14/04/2021",
            status: "Hết Hạn"
        },
        {
            id: "156464891479",
            user: "14/04/2021",
            date: "Cổng 1",
            price: "14/04/2021",
            status: "Đã Sử Dụng"
        }
    ]
}

const orderStatus = {
    "Chưa Sử Dụng": "warning",
    "Đã Sử Dụng": "success",
    "Hết Hạn": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Home = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Thống Kê</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Thông Tin Vé</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Tình Trạng Vé</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
