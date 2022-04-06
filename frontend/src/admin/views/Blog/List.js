import { useState } from "react"
import { useQuery } from "react-query"
import { withRouter } from "react-router"
import * as API from "../../common/api"
import { Table, Tag, Space } from 'antd'
import { Link } from "react-router-dom"
import { string_to_slug } from "admin/common/common"

const columns = [
    {
        title: 'Tiêu đề',
        dataIndex: 'name',
        key: 'name',
        render: (title, record) => {
            return (<Link to={"/admin/blog/edit/" + record.id}>{title}</Link>)
        }
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Link to={'/admin/blog/edit/' + record.id}>Edit</Link>
                <a>Delete</a>
            </Space>
        ),
    },
];


const Blog = (props) => {
    const [listPost, setListPost] = useState([])

    useQuery(
        [API.API_AD_GET_LIST_POST], () => API.getListPost(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                let data = []
                for (const [key, it] of response.data.entries()) {
                    data.push({
                        key: key,
                        name: it.title,
                        date: new Date(it.createAt).toLocaleString(),
                        id: it.id
                    })
                }
                setListPost(data)
            },
            onError: (error) => {

            }
        }
    )


    return (
        <div>
            <Table size="small" columns={columns} dataSource={listPost} />
        </div>
    )
}

export default withRouter(Blog)