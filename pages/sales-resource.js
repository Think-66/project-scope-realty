import React, { useState } from "react";
import { UploadToFireBase, PauseUploadToFireBase, ResumeUploadToFireBase, CancelUploadToFireBase } from '../services/fireBase'
import ProtectedLayout from "../components/ProtectedLayout";

export default function ClientSideECheck() {
  const [progress, setProgress] = useState([])

  const pauseResumeUpload = (index, shouldPaused) => {
    if (shouldPaused) PauseUploadToFireBase(index)
    else ResumeUploadToFireBase(index)

    const tempProgress = [...progress]
    tempProgress[index].paused = shouldPaused
    setProgress(tempProgress)
  }

  return (
    <ProtectedLayout>
      <div>
        <section className="single-page-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 col-lg-8 col-md-12 col-sm-12 col-12 cmp-num-lis-hdr">
                <h3 className="pt-3">
                  Sales Resources
                </h3>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 m-auto pt-4">
                <iframe src="https://drive.google.com/embeddedfolderview?id=1FvJH2w_9hLcp4tvVxSTKAeytlnh23Of_#grid" width="100%" height="1000" frameBorder="0"></iframe>
                <div>
                  <input type="file" name="file" onChange={(e) => {
                    e.persist();
                    UploadToFireBase(progress, setProgress, [...e.target?.files])
                  }} multiple />
                  {progress &&
                    progress.map((file, index) => (
                      <div key={`progress-bar-${index}`}>
                        {file.name}
                        <div className="progress my-3" key={"progress-bar" + index}>
                          <div className="progress-bar" role="progressbar" style={{ width: `${file.percentage}%` }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        {file?.paused ?
                          <button onClick={() => pauseResumeUpload(index, false)}>Resume</button>
                          :
                          <button onClick={() => pauseResumeUpload(index, true)}>Pause</button>
                        }
                        <button onClick={() => CancelUploadToFireBase(0)}>Cancel</button>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    </ProtectedLayout>
  );
}
