import { withRouter } from "react-router"
import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useRef, useState } from "react"
import { Button, message, Form, Input } from "antd"
import * as API from "../../common/api"
import { useMutation, useQuery } from "react-query"
import { useForm } from "react-hook-form"

const BlogEdit = (props) => {
    const { history } = props
    const editorRef = useRef(null)
    const [post, setPost] = useState({})
    const { id } = props.match.params
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const updatePost = (data) => {
        data.content = editorRef.current.getContent()
        data.sha = post.sha
        data.id = post?.post.id
        doUpdatePost.mutate(data)
    }

    const doUpdatePost = useMutation(API.updatePost, {
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

    useQuery(
        [API.API_AD_GET_POST], () => API.getPost({ id }),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setPost(response.data)
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <div>
            <form method="post" onSubmit={handleSubmit(updatePost)}>
                <label>Tiêu đề:</label>
                <div>
                    <input className="ant-input" name="title" defaultValue={post?.post?.title} {...register("title", { required: true })} />
                    {errors.title && <span className="error">Nhập tiêu đề</span>}
                </div>
                <label className="mt-3">Nội dung:</label>
                <Editor
                    apiKey="bxq49lgtqhaiqkgwboqskgj96935s151i7ipf2vsijgfau6l"
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={post?.post?.content}
                    name="content"
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
                <div className="text-right mt-3">
                    <Button type="primary" htmlType="submit">Lưu</Button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(BlogEdit)