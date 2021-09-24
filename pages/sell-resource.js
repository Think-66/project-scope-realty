import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedLayout from "../components/ProtectedLayout";
import { GetFireBase } from '../services/fireBase'
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

 useEffect(() => {
  GetFireBase('sell-resource').then((res) => {
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

   $('#sellPreviewModel').modal('show')
  }
  if (data.id == 'download_files') {
   var fileDownload = require('js-file-download');
   const dataFiles = data.state.selectedFiles
   dataFiles && dataFiles.map((file, id) => {
    fileDownload(file.thumbnailUrl, file.name);

   })
  }

 };



 const fileActions = [
  ChonkyActions.DownloadFiles,
  ChonkyActions.SelectAllFiles,
  ChonkyActions.ClearSelection,
  ChonkyActions.EnableGridView,
  ChonkyActions.EnableListView,
  ChonkyActions.EnableCompactView,
  ChonkyActions.FocusSearchInput,
  ChonkyActions.MouseClickFile,
 ]

 return (
  // <ProtectedLayout>
  <div>
   <div className="modal fade" id="sellPreviewModel" tabIndex="-1" role="dialog" aria-labelledby="previewModelTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title" id="previewModelTitle">Preview</h5>
       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
       </button>
      </div>
      <div className="modal-body d-flex justify-content-center">
       <FileViewer fileType={fileType} filePath={filePath} />
      </div>
      <div className="modal-footer">
       <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
     </div>
    </div>
   </div>

   <section className="single-page-sec">
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-12 col-lg-8 col-md-12 col-sm-12 col-12 cmp-num-lis-hdr">
       <h3 className="pt-3">
        Rental Resources
       </h3>
      </div>
      <div className="col-12 m-auto pt-4">
       <div style={{ height: 1000 }}>
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
