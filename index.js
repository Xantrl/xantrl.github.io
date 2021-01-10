const dropboxLink = "https://www.dropbox.com/s/4xs93ow8li7elwz/Effective%20Modern%20C%2B%2B%2042%20Specific%20Ways%20to%20Improve%20Your%20Use%20of%20C%2B%2B11%20and%20C%2B%2B14%20by%20Scott%20Meyers%20%28z-lib.org%29.pdf?dl=0";
const clientId = "2eaddfabef504e0cbf423904d945d124";
const viewerOptions = {
    embedMode: "FULL_WINDOW",
    defaultViewMode: "FIT_PAGE",
    showDownloadPDF: true,
    showPrintPDF: false,
    showLeftHandPanel: true,
    showAnnotationTools: true
};

document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var urlToPDF = directLinkFromDropboxLink(dropboxLink);
    var adobeDCView = new AdobeDC.View({
        clientId: clientId, // This clientId can be used for any CodePen example
        divId: "embeddedView"
    });
    adobeDCView.previewFile(
        {
            content: { promise: fetchPDF(urlToPDF) },
            metaData: { fileName: urlToPDF.split("/").slice(-1)[0] }
        },
        viewerOptions
    );
});

// Utility Functions:
// Return a Promise that fetches the PDF. 
function fetchPDF(urlToPDF) {
    return new Promise((resolve) => {
        fetch(urlToPDF)
            .then((resolve) => resolve.blob())
            .then((blob) => {
                resolve(blob.arrayBuffer());
            })
    })
}

// Converts a standar Dropbox link to a direct download link
function directLinkFromDropboxLink(dropboxLink) {
    return dropboxLink.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");
}

// Add arrayBuffer if necessary i.e. Safari
(function () {
    if (Blob.arrayBuffer != "function") {
        Blob.prototype.arrayBuffer = myArrayBuffer;
    }

    function myArrayBuffer() {
        return new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.readAsArrayBuffer(this);
        });
    }
})();
