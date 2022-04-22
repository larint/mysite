import { Editor } from '@tinymce/tinymce-react'
import { useRef } from "react"
import { Button, message, Form, Input, Breadcrumb } from "antd"
import * as API from "../../common/api"
import { useMutation } from "react-query"
import { useNavigate } from 'react-router-dom'

const BlogCreate = (props) => {
    const navigate = useNavigate()
    const editorRef = useRef(null)

    const savePost = (data) => {
        if (editorRef.current) {
            data['content'] = editorRef.current.getContent()
            doSavePost.mutate(data)
        }
    };

    const doSavePost = useMutation(API.savePost, {
        onSuccess: (response) => {
            if (response.status == 200) {
                navigate('/admin/blog')
            } else {
                message.error('error')
            }
        },
        onError: (error) => {
            message.warning('error')
        }
    })

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Bài viết</Breadcrumb.Item>
                <Breadcrumb.Item>Tạo mới</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Form
                    name="basic"
                    onFinish={savePost}
                    autoComplete="off"
                >
                    <label >Tiêu đề:</label>
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: 'enter title' }]}
                    >
                        <Input />
                    </Form.Item>
                    <label >Nội dung:</label>
                    <Editor
                        apiKey="bxq49lgtqhaiqkgwboqskgj96935s151i7ipf2vsijgfau6l"
                        onInit={(evt, editor) => editorRef.current = editor}
                        init={{
                            height: 800,
                            menubar: true,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help | code | media image | preview',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            paste_data_images: true
                        }}
                    />
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="text-right mt-3">
                        <Button type="primary" htmlType="submit">
                            Lưu
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default BlogCreate