export const mockUploadResponse = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ cat: "Scottish Fold" }), 60000),
  );
};

//If I was creating the api for real (using node as an example) I would do something like:

// app.use("api/isthisacat", require("./routes/imageUpload"));
// --> this would go to middleware that for example that verifies JWT and verifies the base64 image string
// --> then to controller or request to AI service
//--> then return error or response
