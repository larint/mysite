import { useEffect, useRef, useState } from "react"
import { useMutation, useQuery } from "react-query"
import * as API from "../../common/api"
import {
    Breadcrumb,
    Form,
    Input,
    Button,
    DatePicker,
    Upload,
    message,
    Row,
    Col
} from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import moment from "moment"

const { TextArea } = Input

const Profile = (props) => {
    const [avatarUrl, setAvatarUrl] = useState('')
    const [avatarData, setAvatarData] = useState('')
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState({})
    const formRef = useRef()

    useQuery(
        [API.API_AD_GET_PROFILE], () => API.getProfile(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                setProfile(response.data)
            },
            onError: (error) => {

            }
        }
    )

    const doSaveProfile = useMutation(API.saveProfile, {
        onSuccess: (response) => {
            if (response.status == 200) {
                message.success('save profile')
            } else {
                message.error('error')
            }
        },
        onError: (error) => {
            message.warning('error')
        }
    })

    useEffect(() => {
        if (Object.keys(profile).length > 0) {
            setAvatarUrl(`data:image/png;base64,${profile.avatar}`)
            formRef.current.setFieldsValue({
                sha: profile.sha,
                displayName: profile.name,
                position: profile.job,
                birthday: moment(profile.birthDay, 'DD/MM/YYYY'),
                phone: profile.contact?.phone,
                email: profile.contact?.email,
                address: profile.contact?.address,
                intro: profile.intro,
                fb: profile.social?.fb ? profile.social.fb : '',
                github: profile.social?.github ? profile.social.github : '',
            })
        }
    }, [profile])

    const saveInfo = (form) => {
        for (let key in form) {
            if (!form[key]) { form[key] = '' }
        }
        form.avatar = avatarData
        form.birthday = form.birthday instanceof moment ? form.birthday.format("DD/MM/YYYY") : form.birthday
        doSaveProfile.mutate(form)
    }

    const handleChange = (info) => {
        setAvatarUrl(null)
        if (info.file.status === 'uploading') {
            setLoading(true)
            return
        }

        getBase64(info.file.originFileObj, imageUrl => {
            setAvatarUrl(imageUrl)
            setLoading(false)
        })
    };

    const getBase64 = (img, callback) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(img)
    }

    const beforeUpload = (file) => {
        setAvatarData(file)
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!')
        }
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!')
        }
        return isJpgOrPng && isLt2M
    }

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>/</Breadcrumb.Item>
                <Breadcrumb.Item>Thông tin</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Form
                    ref={formRef}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    size="default"
                    onFinish={saveInfo}
                >
                    <Form.Item name="sha" hidden={true}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Avatar" valuePropName="avatar"
                        rules={[
                            { required: true, message: 'Vui lòng chọn Avatar!' },
                        ]}
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            accept=".png,.jpg"
                        >
                            {avatarUrl ? <img src={avatarUrl} alt="avatar" style={{ width: '100%' }} /> : (
                                <div>
                                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Tên" name="displayName"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Tên!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Vị trí" name="position"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Vị trí!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Năm sinh" name="birthday"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Năm sinh!' },
                        ]}
                    >
                        <DatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="phone"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Số điện thoại!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            { type: 'email', message: 'E-mail! không hợp lệ', },
                            { required: true, message: 'Vui lòng nhập E-mail!', },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Địa chỉ" name="address"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Địa chỉ!' },
                        ]}
                    >
                        <TextArea />
                    </Form.Item>
                    <Form.Item
                        name="intro"
                        label="Mô tả"
                        rules={[
                            { required: true, message: 'Vui lòng nhập Mô tả!' },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="fb"
                        label="Facebook link"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="github"
                        label="Github link"
                    >
                        <Input />
                    </Form.Item>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={14}>
                            <Button type="primary" htmlType="submit" className="mt-3">Lưu</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Profile