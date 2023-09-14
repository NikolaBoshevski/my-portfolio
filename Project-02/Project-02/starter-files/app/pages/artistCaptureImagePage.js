// let capturedImgURL;
export const takenSnapshot = document.querySelector("#takenSnapshot");
export function initArtistCaptureImage() {

    const liveStream = document.querySelector('#liveStream');
    const liveCaptureCanvas = document.querySelector('#liveCapture');
    const captureImageBtn = document.querySelector("#captureImageBtn");
    const takenSnapshot = document.querySelector("#takenSnapshot");
    const snapshotContainer = document.querySelector("#snapshotContainer");
    navigator
        .mediaDevices
        .getUserMedia({
            video: {
                facingMode: { ideal: "environment" },
            },
        })
        .then(stream => {
            console.log(stream);
            liveStream.srcObject = stream;


        })

    liveStream.addEventListener("canplay", function () {
        liveCaptureCanvas.width = liveStream.width;
        liveCaptureCanvas.height = liveStream.height;
    })

    captureImageBtn.addEventListener("click", () => {

        const ctx = liveCaptureCanvas.getContext("2d");

        ctx.drawImage(liveStream, 0, 0);

        const imageDataUrl = liveCaptureCanvas.toDataURL("image/png");
        takenSnapshot.src = imageDataUrl;
        console.log(imageDataUrl);
        location.hash = "#artistNewItemPage"
        snapshotContainer.innerHTML = `<img src="${imageDataUrl}" alt="captured-img" class="w-100 h-100 captured"></img>`

        const stream = liveStream.srcObject;
        const tracks = stream.getTracks();

        tracks[0].stop();

    })

}