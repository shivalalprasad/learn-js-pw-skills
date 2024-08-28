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


// // This is parallel execution
// getFile("https://shivalalprasad.vercel.app/Resume")
// .then(function f(value) {
//     console.log("Downloaded data is", value);
// })

// writeFile("Some data", "file.txt")
// .then(function f(value) {
//     console.log("Write status is", value);
// })

// uploadFile("file.txt", "https://shivalalprasad.vercel.app/Resume")
// .then(function f(value) {
//     console.log("Upload status is", value);
// })

// download -> waiting for downloading to complete -> we execute function f -> f calls writefile ->
// when file writing is done p2 is resolved -> then g is executed -> g calls upload -> when upload is done
// p3 is resolved -> then h is executed
// const p2 = getFile("https://shivalalprasad.vercel.app/Resume")
// .then(function f(value) {
//     console.log("Downloaded data is", value);
//     return writeFile(value, "file.txt");
// })

// const p3 = p2.then(function g(value) {
//     console.log("file written", value);
//     return uploadFile(value, "https://shivalalprasad.vercel.app/Resume");
// });

// p3.then(function h(value) {
//     console.log("file uploaded", value);
// })




// .then chaining
getFile("https://shivalalprasad.vercel.app/Resume")
.then(function f(value) {
    console.log("Downloaded data is", value);
    return writeFile(value, "file.txt");
})
.then(function g(value) {
    console.log("file written", value);
    return uploadFile(value, "https://shivalalprasad.vercel.app/Resume");
})
.then(function h(value) {
    console.log("file uploaded", value);
})
.catch(function i(value) {
    console.log("Error occured", value);
})