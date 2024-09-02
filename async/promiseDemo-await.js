function getFile(url, callback) {
    return new Promise((res, rej) => {
      console.log(`downloading file from this`, url);
      setTimeout(() => {
        // giving some random values to make it work like real time applications
        var r1 = Math.floor(Math.random() * 1000);
        console.log(r1);
        if (r1 % 2 === 0) {
          console.log("Downloaded data from "+url);
          let v = "component";
          res(v);
          callback?.(v);
        } else {
          let v = `error occured while downloading file`;
          rej(v)
          // throw new Error("getFile got some error");
        }
      }, 2000);
    });
  }
  
  function writeFile(data, fileName, callback) {
    // fileName tells the name of the file to be created in which data will be written
    return new Promise((res, rej) => {
      console.log("Writing", data, " to file");
      setTimeout(() => {
        console.log("Writing to file ", fileName, " is done");
        // giving some random values to make it work like real time applications
        var r1 = Math.floor(Math.random() * 1000);
        console.log(r1);
        if (r1 % 2 === 0) {
          let v = "Success";
          console.log(`writing file status is ` + v);
          res(v);
          callback?.(v);
        } else {
          let v =`error occured while writing file`;
          rej(v)
          // throw new Error("writeFile got some error");
        }
      }, 3000);
    });
  }
  
  function uploadFile(fileName, url, callback) {
    return new Promise((res, rej) => {
      // fileName tells the name of the file to be uploaded
      console.log("Uploading file ", fileName, " to ", url);
      setTimeout(() => {
        // giving some random values to make it work like real time applications
        var r1 = Math.floor(Math.random() * 1000);
        console.log(r1);
        if (r1 % 2 === 0) {
          console.log("file is uploaded to ", url, " successfully");
          let v = "Success";
          res(v);
          callback?.(v);
        } else {
          let v =`error occured while uploading file`;
          rej(v)
          // throw new Error("uploadFile got some error");
        }
      }, 4000);
    });
  }

  function* all(){
    console.log("Starting execution");
    const GF = yield getFile("https://shivalalprasad.vercel.app/Resume");
    console.log("Data downloaded is", GF);
    const WF = yield writeFile(GF, "file.txt");
    console.log("File write status", WF);
    const UF = yield uploadFile(WF, "https://shivalalprasad.vercel.app/Resume");
    console.log("Upload status", UF);
    return UF;
  }

// const it = all(); // exec function will return us an gen object having an iterator

const ft = it.next();
ft.value.then(function daf(value) {
    console.log("Calling do after receiving when download is finished", value);

   const future = it.next(value); // interesting
   if(future.done) return; // if there is no more to yield
   future.value.then(daf);
})
