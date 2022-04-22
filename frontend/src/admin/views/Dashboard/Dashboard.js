import { Breadcrumb, Statistic, Row, Col, Button } from "antd"
import { useState } from "react"
import { useQuery } from "react-query"
import * as API from "../../common/api"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Clock } from "../_components"

import {
    LoadingOutlined
} from '@ant-design/icons'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = (props) => {
    const { children, history } = props
    const [loadingData, setLoadingData] = useState(true)
    const [stats, setStats] = useState({})
    const [time, setTime] = useState(new Date().toLocaleString())
    let now = new Date()
    let year = now.getFullYear()
    let labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    labels = labels.map((month) => `${month}/${year}`)

    const [dataChart, setDataChart] = useState({
        labels,
        datasets: [
            {
                label: 'Số lượng',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(53, 144, 255, 0.5)'
            }
        ]
    })

    const optionsChart = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Thống kê bài viết theo tháng',
            },
        },
    }

    useQuery(
        [API.API_AD_GET_STATS_POST], () => API.getStatisticPost(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                setDataChart((prevState) => ({
                    ...prevState,
                    datasets: [
                        {
                            ...prevState.datasets[0],
                            data: Object.values(response?.data.month)
                        }
                    ]
                }))
                setStats(response?.data)
                setLoadingData(false)
            },
            onError: (error) => {
                setLoadingData(false)
            }
        }
    )

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>/</Breadcrumb.Item>
                <Breadcrumb.Item>Thống Kê</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Row gutter={16}>
                    <Col span={3}>
                        <Statistic title="Bài viết" value={stats.total} />
                    </Col>
                    <Col span={12}>
                        {loadingData && (
                            <div>
                                <LoadingOutlined style={{ position: 'absolute', left: '49%', top: '50%', color: '#96c9ff', fontSize: '40px' }} />
                            </div>
                        )}
                        <Bar options={optionsChart} data={dataChart} />
                    </Col>
                    <Col span={9}>
                        <div className="ant-statistic"><div className="ant-statistic-title">Time</div>
                            <div className="ant-statistic-content">
                                <Clock size={300} timeFormat="24hour" hourFormat="standard" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default Dashboard