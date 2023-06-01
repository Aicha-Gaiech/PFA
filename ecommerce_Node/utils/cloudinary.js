const cloudinary = require('cloudinary');


// Configuration 
cloudinary.config({
  cloud_name: "dayeb3mcp",
  api_key: "766231723936583",
  api_secret: "GtwbUgflAfxsLBc7-O_8WIEXwoQ"
});


const cloudinaryUploadImg = async (fileToUploads)=> {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploads, (result) =>{
            resolve(
                {
                    url: result.secure_url,

                },
                {
                    resource_type: "auto",
                }
            );
        });
    });
};


module.exports= cloudinaryUploadImg;