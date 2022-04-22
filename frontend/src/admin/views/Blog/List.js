import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import * as API from "../../common/api"
import { Table, Modal, Space, Breadcrumb, message } from 'antd'
import { Link } from "react-router-dom"
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Blog = (props) => {
    const [listPost, setListPost] = useState([])
    const [loadingData, setLoadingData] = useState(true)

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
                    <span onClick={() => showModalDelete(record.id, record.sha)} style={{ color: 'red', cursor: 'pointer' }}>Delete</span>
                </Space>
            ),
        },
    ]

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
                        id: it.id,
                        sha: it.sha
                    })
                }
                setListPost(data)
                setLoadingData(false)
            },
            onError: (error) => {
                setLoadingData(false)
            }
        }
    )

    const doDeletePost = useMutation(API.deletePost, {
        onSuccess: (response) => {
            if (response.status == 200) {
                let data = JSON.parse(response.config.data)
                setListPost(listPost.filter(item => item.id !== data.id))
            } else {
                message.error('error')
            }
        },
        onError: (error) => {
            message.warning('error')
        }
    })

    const confirmDelete = (id, sha) => {
        doDeletePost.mutate({ id, sha })
    }

    const showModalDelete = (id, sha) => {
        Modal.confirm({
            title: 'Xoá mục này?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'Xoá',
            cancelText: 'Đóng',
            onOk: () => confirmDelete(id, sha)
        })
    }

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Bài viết</Breadcrumb.Item>
                <Breadcrumb.Item>Danh sách</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <p style={{ fontSize: '13px', color: '#9b9b9b', marginLeft: '8px' }}>Tổng số: {listPost.length} bài</p>
                <Table loading={loadingData} size="small" columns={columns} dataSource={listPost} />
            </div>
        </div>
    )
}

export default Blog