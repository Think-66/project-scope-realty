import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";
import { GetFireBase, DownloadFireBase } from '../services/fireBase'
import { defineFileAction, ChonkyActions, ChonkyIconName } from 'chonky';
import FileViewer from 'file-view-react'

import {
  FileBrowser,
  FileContextMenu,
  FileList,
  FileNavbar,
  FileToolbar,
} from 'chonky';

export default function ClientSideECheck() {
  const router = useRouter();
  const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true }];
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState()
  const [filePath, setFilePath] = useState()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    GetFireBase('rental-resource').then((res) => {
      setFiles(res)
    })

  }, []);

  const handleAction = (data) => {
    // Open the files
    if (data.id == "open_files") {
      const fileName = data.payload.files[0].name
      const fileSplit = fileName.split('.')
      setFileType(fileSplit[fileSplit.length - 1])
      setFilePath(data.payload.files[0].thumbnailUrl)
      setIsOpen(true)

    }
    if (data.id == 'download_files') {
      const dataFiles = data.state.selectedFiles
      dataFiles && dataFiles.map((file, id) => {
        DownloadFireBase(file.thumbnailUrl, file.name)
      })
    }

  };



  const fileActions = [
    ChonkyActions.DownloadFiles,
    ChonkyActions.SelectAllFiles,
    ChonkyActions.ClearSelection,
    ChonkyActions.EnableGridView,
    ChonkyActions.EnableListView,
    ChonkyActions.FocusSearchInput,
    ChonkyActions.MouseClickFile,
  ]

  return (
    // <ProtectedLayout>
    <div>
      {isOpen && <>

        <div className='py-5 px-4' style={{ background: 'rgba(0, 0, 0, 0.5)', position: "fixed", zIndex: 2000, width: '100%', height: '100vh', overflowY: 'scroll' }}>
          <div className="px-5 d-flex justify-content-end">
            <button type="button" className="btn btn-dark" style={{ border: '1px solid black', borderRadius: '10px' }} onClick={() => setIsOpen(false)}>Close</button>
          </div>
          <div className="d-flex justify-content-center p-5" style={{ width: '60%', margin: 'auto', background: 'white', border: '3px solid black', borderRadius: '10px' }}>
            <FileViewer fileType={fileType} filePath={filePath} />
          </div>

        </div>
      </>}

      <section className="single-page-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-md-12 col-sm-12 col-12 cmp-num-lis-hdr">
              <h3 className="pt-3">
                Rental Resources
              </h3>
            </div>
            <div className="col-12 m-auto pt-4">
              <div className='' style={{ height: 1000 }}>
                <FileBrowser
                  files={files.files}
                  folderChain={folderChain}
                  onFileAction={handleAction}
                  fileActions={fileActions}
                  disableDefaultFileActions={true}
                >
                  <FileToolbar />
                  <FileList />
                  <FileContextMenu />
                </FileBrowser>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // </ProtectedLayout>
  );
}
