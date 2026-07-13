import { Flex, Spin } from 'antd'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
    return (
        <div>
            <Flex align='center' justify='center' style={{ height: '100vh' }}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
            </Flex>
        </div>
    )
}

export default Loader
