import ProtectedLayout from "../components/ProtectedLayout";
import React, { useState } from 'react'
import { UploadToFireBase, PauseUploadToFireBase, ResumeUploadToFireBase, CancelUploadToFireBase } from '../services/fireBase'
import Dropzone from 'react-dropzone'
import { useSession } from 'next-auth/client'

function AddTrainingResource() {
  const [session, loading] = useSession()

  const [progress, setProgress] = useState([])

  const pauseResumeUpload = (index, shouldPaused) => {
    if (shouldPaused) PauseUploadToFireBase(index)
    else ResumeUploadToFireBase(index)

    const tempProgress = [...progress]
    tempProgress[index].paused = shouldPaused
    setProgress(tempProgress)
  }

  return (
    <ProtectedLayout adminOnly>
      <h1 className='font-weight-bold my-5 text-center'>Add Training Resource</h1>
      <div className='container p-5' style={{ border: '2px solid #C1C7D0', borderRadius: '15px' }} >
        <Dropzone multiple={true} onDrop={(file) => {
          UploadToFireBase(setProgress, file, 'training-resource')
        }}>
          {({ getRootProps, getInputProps }) => (
            <div className='container pt-3 px-4' {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="jumbotron text-center" style={{ background: '#FFFFFF', border: '2px dashed #E5E8EE', borderRadius: '15px' }}>
                <img src="/images/film.png" alt="" width='auto' />
                <div className='h2 text-center font-weight-bold row justify-content-center mt-5' style={{ color: '#466A7F' }}>Drop your video here, or <h2 className='font-weight-bold' style={{ color: '#4AAEE8' }}> &nbsp; browse</h2></div>
                <p style={{ color: '#517387' }}>SUPPORTS: MP4,MOV,MKV</p>
              </div>

            </div>
          )}
        </Dropzone>

        {progress &&
          progress.map((file, index) => (
            <div className='container px-4 pb-3'>
              <div className='container mt-2 py-3' style={{ background: '#F7FAFD', border: '2px solid LightGray', borderRadius: '15px' }}>
                <h5 className='font-weight-bold' style={{ color: '#0E76A8' }}>uploading...</h5>
                <div key={`progress-bar-${index}`} className='row'>
                  <div className='col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10'>
                    <div className='row' style={{ color: '#517387' }}><div className="mx-3">{file.name}</div></div>
                    <div className='row' style={{ color: '#517387' }}><p className='mx-3 font-weight-bold' >{file.percentage}%</p>&nbsp;
                      {file.remaining > 60 ? `${Math.floor(file.remaining / 60)} Minutes and ${Math.floor(file.remaining % 60)}` : Math.floor(file.remaining % 60)} Seconds left</div>
                    <div className=" col-12  my-1 p-0" key={"progress-bar" + index}>
                      <div style={{ width: '100%', background: '#D5D9E4' }} >
                        <div >
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${file.percentage}%`, height: '3px' }} aria-valuenow={file.percentage} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' row col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center mt-sm-2 mt-2 mt-md-0'>
                    {file?.paused ?
                      <div className='d-flex align-items-center justify-content-center btn' style={{ background: '#EBF1FA', borderRadius: '100%', width: '2.5em', height: '2.5em' }} onClick={() => pauseResumeUpload(index, false)}>
                        <img src="/images/play-icon.png" alt="" width='20em' />
                      </div>
                      :
                      <div className='d-flex align-items-center justify-content-center btn' style={{ background: '#EBF1FA', borderRadius: '100%', width: '2.5em', height: '2.5em' }} onClick={() => pauseResumeUpload(index, true)}>
                        <img src="/images/pause-icon.png" alt="" width='auto' />
                      </div>
                    }
                    <div className='ml-5 mx-md-2 d-flex align-items-center justify-content-center btn' style={{ background: '#FFDCD8', borderRadius: '100%', width: '2.5em', height: '2.5em' }} onClick={() => CancelUploadToFireBase(index)}><img src="/images/close-icon.png" alt="" width='auto' /></div>
                  </div>
                </div>
              </div >
            </div>
          ))
        }
      </div >
    </ProtectedLayout >
  );
}

export default AddTrainingResource;
