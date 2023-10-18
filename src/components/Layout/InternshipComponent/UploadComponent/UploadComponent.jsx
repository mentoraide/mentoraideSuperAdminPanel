import { Button } from 'antd'
import React from 'react'
import './UploadComponent.css'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd';
import UploadInternship from "../UploadInternship/UploadInternship"





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
                    navigate('/internship')
                }}
                onCancel={() => {
                    setIsModalVisible(false)
                    navigate('/internship')
                }}
                footer={null}
            >
                <UploadInternship modalCloseProp={setIsModalVisible} />
            </Modal>

        </>
    )
}

export default UploadComponent