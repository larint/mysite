import { withRouter } from "react-router-dom"
import * as API from "../../../common/api"
import { Form, Input, notification } from 'antd'
import { useState } from "react"
import { useQuery } from "react-query"
const { TextArea } = Input

const Contact = (props) => {
    const { profile } = props
    const [captcha, setCaptcha] = useState({})

    const sendContact = (form) => {
        API.sendContact(form.name, form.email, form.content, form.captcha)
            .then(function (response) {
                if (response.status == 200) {
                    notification.success({
                        message: 'Thank You: ' + form.name,
                        description: 'Send contact OK'
                    })
                } else {
                    notification.error({
                        message: 'Error',
                        description: 'Send contact Failed'
                    })
                }
            })
            .catch(function (error) {
            })
    }

    const onFinishFailed = (errorInfo) => {

    }

    useQuery(
        [API.QUERY_KEY_GET_CAPTCHA], () => API.getCaptcha(),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                if (response?.data) {
                    setCaptcha(response.data)
                } else {
                    setCaptcha({})
                }
            },
            onError: (error) => {
                if (error?.response?.status === 401) {

                }
            }
        }
    )

    return (
        <div className="background" style={{ backgroundImage: 'url(assets/img/img_bg_main.jpg)' }}>
            <div id="contact" className="container section">
                <div className="row">
                    <div className="col-md-12">
                        <p id="contacts_header" className="section__title">Get in touch_</p>
                    </div>
                </div>
                <div className="row contacts">
                    <div className="col-md-5 col-lg-4">
                        <div className="contacts__list">
                            <dl className="contact-list">
                                <dt>Phone:</dt>
                                <dd><a href={"tel:" + profile.contact?.phone}>{profile.contact?.phone}</a></dd>
                                <dt>Skype:</dt>
                                <dd><a href={"skype:" + profile.contact?.skype}>{profile.contact?.skype}</a></dd>
                                <dt>Email:</dt>
                                <dd><a href={"mailto:" + profile.contact?.email}>{profile.contact?.email}</a></dd>
                            </dl>
                        </div>
                        <div className="contacts__social">
                            <ul>
                                <li><a href={profile.social?.fb} target="_blank">Facebook</a></li>
                                <li><a href={profile.social?.github} target="_blank">GitHub</a></li>
                                <li><a href={profile.social?.insta} target="_blank">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <div className="contacts__form">
                            <p className="contacts__form-title">Or just write me a letter here_</p>
                            <Form
                                className="contact-form"
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={sendContact}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Your name' }]}
                                >
                                    <Input className="form-field js-field-name" type="text" placeholder="Your name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Your e-mail' }]}
                                >
                                    <Input className="form-field js-field-name" type="email" placeholder="Your e-mail" />
                                </Form.Item>
                                <Form.Item
                                    name="content"
                                    rules={[{ required: true, message: 'Type the message here' }]}
                                >
                                    <TextArea rows={4} maxLength="1000" />
                                </Form.Item>
                                <Form.Item
                                    label={captcha.code}
                                    className="captcha"
                                    name="captcha"
                                    rules={[{ required: true, message: 'Captcha' }]}
                                >
                                    <Input type="text" placeholder="Enter captcha" />
                                </Form.Item>
                                <button className="site-btn site-btn--form" type="submit" value="Send">Send</button>
                            </Form>
                        </div>
                        <div className="footer">
                            <p>© 2021 Quang Dung</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Contact)