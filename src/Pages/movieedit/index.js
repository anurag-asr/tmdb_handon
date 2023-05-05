import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { gql, useMutation } from "@apollo/client";

export const MOVIE_UPDATE_QUERY = gql`
mutation MovieUpdating($id:ID!,$data:UpdateMovieInput!){
updateMovie(id:$id,data:$data){
 message
 data{
 posterData
 collections
  credits
  genres
} 
}
}
`

const MovieEdit = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [update_movie] = useMutation(MOVIE_UPDATE_QUERY,{
    variables:{
        id:"a4785d55-851d-4c3b-8557-d64696c53d65",
        data:{
          adult: true,
          budget: 100000,
          originalLanguage:"Hindi",
          originalTitle: "Trival",
          title: "The Times of India",
          overview: "Towars",
          releaseDate: "2023-03-28T07:39:16.471Z",
          revenue: 231213,
          runtime: 121,
          status: "completed",
          tagline: "The tiger zinda hai",
          countryIds: [],
          languageIds: []
        }
    }
  })

  return (
    <div className="movie_edit">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
      
        </Form.Item>
        <Button onClick={()=>{update_movie()}}>Do it</Button>
      </Form>
    </div>
  );
};

export default MovieEdit;
