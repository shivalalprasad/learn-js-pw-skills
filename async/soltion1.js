/**
 * Implement a set of dummy functions which can mimic the behavior of the following functions:
 * 1. download -> This function should mimic downloading of somecontent from a url
 * 2. writeFile -> This function should mimic writing of some content to a file
 * 3. upload -> This function should mimic uploading the file to a server
 *
 * Now after you've implemented these functions, try to use them in a scenario where we first
 * download a file, then write it to a disk and then upload it to a server.
 */

//  creating downloading data function

function getFile(url, callback) {
  console.log(`downloading file from this`, url);
  setTimeout(() => {
    // giving some random values to make it work like real time applications
    var r1 = Math.floor(Math.random() * 1000);
    console.log(r1);
    if (r1 % 2 === 0) {
      console.log("Download is done");
      let downloadedData = "component";
      callback?.(downloadedData);
    } else {
      throw new Error("getFile got some error");
    }
  }, 2000);
}

// getFile("https://shivalalprasad.vercel.app/Resume", function handleDownload(data) {
//     console.log("Data downloaded is", data);
// })

// creating writeFile function

function writeFile(data, fileName, callback) {
  // fileName tells the name of the file to be created in which data will be written
  console.log("Writing", data, " to file");
  setTimeout(() => {
    console.log("Writing to file ", fileName, " is done");
    // giving some random values to make it work like real time applications
    var r1 = Math.floor(Math.random() * 1000);
    console.log(r1);
    if (r1 % 2 === 0) {
      let status = "Success";
      console.log(`writing file status is ` + status);
      callback?.(status);
    } else {
      throw new Error("writeFile got some error");
    }
  }, 3000);
}

// creating upload function

function uploadFile(fileName, url, callback) {
  // fileName tells the name of the file to be uploaded
  console.log("Uploading file ", fileName, " to ", url);
  setTimeout(() => {
    // giving some random values to make it work like real time applications
    var r1 = Math.floor(Math.random() * 1000);
    console.log(r1);
    if (r1 % 2 === 0) {
      console.log("Upload is done");
      let uploadStatus = "Success";
      callback?.(uploadStatus);
    } else {
      throw new Error("uploadFile got some error");
    }
  }, 4000);
}

function suncingFile() {
  getFile(
    "https://shivalalprasad.vercel.app/Resume",
    function handleDownload(data) {
      writeFile(data, "file.txt", function handleWrite(status) {
        uploadFile(
          "file.txt",
          "https://shivalalprasad.vercel.app/Resume",
          function handleUpload(uploadStatus) {
            console.log("All done");
          }
        );
      });
    }
  );
}

suncingFile();
