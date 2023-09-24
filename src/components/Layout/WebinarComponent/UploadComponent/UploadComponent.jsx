import { Button } from 'antd'
import React from 'react'
import './UploadComponent.css'
import { useNavigate } from 'react-router-dom'




const UploadComponent = () => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/uploadWebinar')
    }
    return (
        <>

            <div className="button-container">
                <Button type="primary" onClick={handleOnClick} className="button webinar-upload-button">Upload</Button>
            </div>

        </>
    )
}

export default UploadComponent