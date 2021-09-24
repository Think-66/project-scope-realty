import React from "react";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';

const promiseArray = []
let task = []

const GetStorageInstance = () => {
  let app = null;
  let storage = null;

  const firebaseConfig = {
    apiKey: "AIzaSyDiFeBWAQn8dK0AibjJP9kkIdg4YFCyGNc",
    authDomain: "scope-realty-a117e.firebaseapp.com",
    projectId: "scope-realty-a117e",
    storageBucket: "scope-realty-a117e.appspot.com",
    messagingSenderId: "42097501879",
    appId: "1:42097501879:web:77446f09e39fde447d0f32",
    measurementId: "G-9PMNJ3HCLP"
  };

  if (!app) {
    app = initializeApp(firebaseConfig);
  }

  if (!storage) {
    storage = getStorage();
  }
  return storage
}

export const GetFireBase = async (folder) => {

  // Create a reference under which you want to list
  const listRef = ref(GetStorageInstance(), `uploads/${folder}/`);

  // Find all the prefixes and items.
  return listAll(listRef)
    .then((res) => {
      const response = {
        folders: [],
        files: []
      }
      const filePathPromiseArray = []

      res.prefixes.map((folderRef, index) => {
        response.folders.push({ id: `folder-${index}`, name: folderRef._location.path_, isDir: true, _location: folderRef._location })
      });
      res.items.map((itemRef, index) => {
        const downloadURLRef = ref(GetStorageInstance(), itemRef.fullPath);
        filePathPromiseArray.push(getDownloadURL(downloadURLRef))

        response.files.push({ id: `file-${index}`, name: itemRef.name, isDir: false, _location: itemRef._location })
      });

      return Promise.all(filePathPromiseArray).then((promiseRes) => {
        promiseRes?.map((downloadURL, index) =>
          response.files[index].thumbnailUrl = downloadURL
        )

        return response
      })
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
}

export const UploadToFireBase = (setProgress, eventFiles, folder) => {

  let progress = []
  if (eventFiles?.length > 0) {

    // Create a root reference
    const storage = GetStorageInstance();

    // Upload file and metadata to the object 'images/mountains.jpg'
    // const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
    eventFiles.map((file, index) => {
      const fileName = file.name.substr(0, file.name.lastIndexOf('.')) + new Date().getTime() + file.name.substr(file.name.lastIndexOf('.'), file.name.length)

      // const storageRef = ref(storage, `uploads/${userId}/` + fileName);
      const storageRef = ref(GetStorageInstance(), `uploads/${folder}/` + fileName);

      const prog = progress;
      prog.push({ percentage: 0, name: eventFiles?.length > 0 ? eventFiles[index].name : "undefined" })
      setProgress(prog);
      progress = prog;

      const uploadTask = uploadBytesResumable(storageRef, file);
      task.push(uploadTask)

      promiseArray.push = new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            let progTemp = progress;
            progTemp[index].percentage = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            progTemp[index].startTime = progTemp[index].startTime ? progTemp[index].startTime : new Date()
            progTemp[index].remaining = (((new Date() - progTemp[index].startTime) / progTemp[index].percentage) * (100 - progTemp[index].percentage)) / 1000
            setProgress([...progTemp]);
            progress = [...progTemp];

            switch (snapshot.state) {
              case 'paused':
                // console.log('Upload is paused');
                break;
              case 'running':
                // console.log('Upload is running');
                break;
            }
          },
          (error) => {
            switch (error.code) {
              case 'storage/unauthorized':
                toast.error("Unauthorized Operation")
                break;
              case 'storage/canceled':
                toast.error("Operation canceled")
                break;
              case 'storage/unknown':
                toast.error("Unknown error occurred")
                break;
            }
            reject()
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL)
              toast.info('File available at', downloadURL);
            });
          }
        );
      })
      // Listen for state changes, errors, and completion of the upload.
    })
    Promise.all(promiseArray).then(() => console.log("finished"))
  }
}

export const PauseUploadToFireBase = (index) => {
  if (task?.length > index) {
    task[index].pause()
  }
}

export const ResumeUploadToFireBase = (index) => {
  if (task?.length > index) {
    task[index].resume()
  }
}

export const CancelUploadToFireBase = (index) => {
  if (task?.length > index) {
    task[index].cancel()
  }
}