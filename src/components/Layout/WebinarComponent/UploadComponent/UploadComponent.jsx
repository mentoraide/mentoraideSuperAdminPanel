import { Button } from 'antd'
import React from 'react'
import './UploadComponent.css'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd';
import UploadWebinar from '../../UploadWebinar/UploadWebinar';





const UploadComponent = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const navigate = useNavigate()
    const handleOnClick = () => {
        setIsModalVisible(true);
    }
    return (
        <>

            <div className="button-container">
                <Button type="primary" onClick={handleOnClick} className="button webinar-upload-button">Upload</Button>
            </div>

            <Modal
                open={isModalVisible}
                style={{
                    top: 20,
                    width: "max-content"
                }}
                onOk={() => {
                    setIsModalVisible(false)
                    navigate('/webinar')
                }}
                onCancel={() => {
                    setIsModalVisible(false)
                    navigate('/webinar')
                }}
                footer={null}
            >
                <UploadWebinar modalCloseProp={setIsModalVisible} />
            </Modal>

        </>
    )
}

export default UploadComponent