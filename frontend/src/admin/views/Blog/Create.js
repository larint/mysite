import { withRouter } from "react-router"
import { Editor } from '@tinymce/tinymce-react'
import { useRef, useState } from "react"
import { Button, message, Form, Input } from "antd"
import * as API from "../../common/api"
import { useMutation } from "react-query"

const BlogCreate = (props) => {
    const { history } = props
    const [content, setContent] = useState('')
    const editorRef = useRef(null)

    const savePost = (data) => {
        data['content'] = content
        doSavePost.mutate(data)
    };

    const doSavePost = useMutation(API.savePost, {
        onSuccess: (response) => {
            if (response.status == 200) {
                history.push('/admin/blog')
            } else {
                message.error('error')
            }
        },
        onError: (error) => {
            message.warning('error')
        }
    })


    const onEditorChange = () => {
        if (editorRef.current) {
            let content = editorRef.current.getContent()
            console.log(content);
            setContent(content)
        }
    }

    return (
        <div>
            <Form
                name="basic"
                initialValues={{ remember: true }}
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
                    initialValue=""
                    onEditorChange={onEditorChange}
                    init={{
                        height: 800,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help | code',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="text-right mt-3">
                    <Button type="primary" htmlType="submit">
                        Lưu
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default withRouter(BlogCreate)