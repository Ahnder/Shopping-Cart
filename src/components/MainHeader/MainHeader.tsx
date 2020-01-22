import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { CART_PATH, PRODUCTS_LIST_PATH } from 'routes';

/**
 * @description NomalLayout에서 사용하는 메인 헤더 컴포넌트
 */
export const MainHeader = () => {
  const { Title, Text } = Typography;

  return (
    <>
      <Row>
        <Col xs={20} sm={12}>
          <NavLink to={PRODUCTS_LIST_PATH}>
            <Title style={titleStyle}>CLASS 101</Title>
          </NavLink>
        </Col>
        <Col xs={4} sm={12} style={{ textAlign: 'right' }}>
          <NavLink to={CART_PATH}>
            <Button icon="shopping-cart">
              <Text strong={true}>장바구니</Text>
            </Button>
          </NavLink>
        </Col>
      </Row>
    </>
  );
};

const titleStyle = {
  color: '#fff',
  verticalAlign: 'center',
  marginTop: '7px',
};
