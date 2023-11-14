// Your Firebase Database and Storage references
const database = firebase.database();
const storage = firebase.storage();

let userName;

function startUpload() {
    userName = document.getElementById('userName').value;
    // Save the user name to Firebase Database
    database.ref(userName).set({
        name: userName
    });
    // Redirect to the upload page
    window.location.href = 'upload.html';
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const storageRef = storage.ref(`${userName}/${file.name}`);
        const uploadTask = storageRef.put(file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Update progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById('uploader').value = progress;
            },
            (error) => {
                // Handle unsuccessful uploads
                console.error('Error uploading file:', error);
            },
            () => {
                // Handle successful uploads on complete
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // Save download URL to Firebase Database
                    database.ref(`${userName}/files`).push({
                        fileName: file.name,
                        downloadURL: downloadURL
                    });
                    alert('Upload complete!');
                });
            }
        );
    } else {
        alert('Please choose a file to upload.');
    }
}
