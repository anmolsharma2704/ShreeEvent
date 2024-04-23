import React from 'react';
import "./Contact.css"
import { Button, DatePicker, Form, Input, InputNumber, Mentions, Select, message } from 'antd'; // Import message from 'antd'

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};

const eventTypes = ['Wedding', 'Birthday', 'Conference', 'Workshop', 'Seminar', 'Webinar', 'Meeting'];

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (formData) => {
    // Simulate saving data to server (you'll replace this with actual API call)
    setTimeout(() => {
      message.success('Data saved successfully. We will contact you soon.');
      form.resetFields();
    }, 1000);
  };

  return (
    <Form {...formItemLayout} form={form} onFinish={onFinish} variant="filled" style={{ maxWidth: 600 }}>
      <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Mobile Number" name="MobileNumber" rules={[
        { required: true, message: 'Please input your mobile number!' },
        { pattern: /^[0-9]+$/, message: 'Please enter a valid mobile number!' },
        { len: 10, message: 'Mobile number must be 10 digits!' },
      ]}>
        <Input style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="About Event" name="AboutEvent" rules={[{ required: true, message: 'Please input about the event!' }]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Venue Address" name="VenueAddress" rules={[{ required: true, message: 'Please input venue address!' }]}>
        <Mentions />
      </Form.Item>

      <Form.Item label="Type of Event" name="TypeOfEvent" rules={[{ required: true, message: 'Please select type of event!' }]}>
        <Select>
          {eventTypes.map(eventType => (
            <Select.Option key={eventType} value={eventType}>
              {eventType}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Date" name="Date" rules={[
        { required: true, message: 'Please select event date!' },
        { validator: (_, value) => value && value.isAfter(new Date()) ? Promise.resolve() : Promise.reject('Event date must be in the future!') }
      ]}>
        <DatePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact;
