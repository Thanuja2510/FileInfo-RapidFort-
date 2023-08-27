document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("uploadForm");
    const uploadButton = document.getElementById("uploadButton");
    const fileInfoDiv = document.getElementById("fileInfo");
   console.log("before event")
    uploadForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const formData = new FormData(uploadForm);
      try {
        const response = await fetch("http://localhost:3000/upload", {
          method: "POST",
          body: formData,
        });
        console.log("Response:", response);
        const data = await response.json();
        if (data.success){
            console.log("file received");
            console.log(data)
          fileInfoDiv.innerHTML = `
            <h3>Information of the file uploaded.</h3>
            <p>File Name: ${data.fileInfo.originalname}</p>
            <p>File Size: ${data.fileInfo.size}</p>
            <p>File Type: ${data.fileInfo.mimetype}</p>
            
          `;
        } else {
          fileInfoDiv.innerHTML = `<p>Error: ${data.message}</p>
          `;
          
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
  