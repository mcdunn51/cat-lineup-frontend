import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";
//
// import { mockUploadResponse } from "./mockUploadResponse";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const PictureUpload = () => {
  const [catImg, setCatImg] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const uploadImg = async (data) => {
    // await mockUploadResponse()
    axios
      .post("http://localhost:3500/api/isthisacat", data)
      .then((res) => {
        console.log(res);
        setResponse(res.data.result.cat);
        setCatImg();
        setLoading();
      })
      .catch((err) => {
        // console.log(error);
        setError(error?.message || "Cat couldn't be identified");
        setLoading();
      });
  };

  const fileToBase64 = async () => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr);
      fr.onerror = (err) => reject(err);
      fr.readAsDataURL(catImg);
    });
  };

  const createDataObj = async (catImg) => {
    setLoading(true);
    setError();
    let toBase64;
    try {
      toBase64 = await fileToBase64(catImg);
      toBase64 = toBase64.result;
    } catch (err) {
      setError("Error! Could not process file");
      return;
    }
    const data = {
      imgBase64: toBase64,
      fileName: catImg?.name,
      sizeMB: catImg?.size / 1000000,
    };
    uploadImg(data);
  };

  useEffect(() => {
    if (catImg) {
      createDataObj(catImg);
    }
  }, [catImg]);

  const {
    // acceptedFiles,
    getRootProps,
    getInputProps,
    fileRejections,
    isFocused,
    isFileDialogActive,
    isDragActive,
  } = useDropzone({
    maxFiles: 1,
    accept: { "image/jpeg": [".jpeg"] },
    maxSize: 15000000,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setCatImg(acceptedFiles[0]);
    },
  });

  const getClassName = () => {
    let name = "dropzone";
    if (fileRejections.length) name += " rejected";
    if (isFocused || isFileDialogActive || isDragActive) name += " focused";
    return name;
  };

  const getFileErrors = () => {
    let msg = "";
    if (fileRejections.length) {
      fileRejections[0].errors.map((error, index) => {
        let message = error.message;
        if (error.code === "file-too-large")
          message = "File is larger than 15 MB";
        if (index === 0) msg += message;
        else msg += `, ${message}`;
      });
    }
    return msg;
  };

  if (loading)
    return (
      <LoadingSpinner message="Uploading and identifying, this can take a few minutes depending on your internet connection." />
    );

  //ran out of time here
  // if (error) return <Error message={error} />;

  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <section className="reactDropzone container">
            <div {...getRootProps({ className: getClassName() })}>
              <input {...getInputProps()} />
              <p>
                {catImg
                  ? catImg?.name
                  : "Drag 'n' drop a cat JPEG image, or click to select"}
              </p>
            </div>
          </section>
          <Form.Text className="dangerFont" muted>
            {getFileErrors()}
          </Form.Text>
        </Col>
      </Row>
      {response ? (
        <Row className="mt-5">
          <Col>
            <p className="text-center">Cat found: {response}</p>
          </Col>
        </Row>
      ) : null}
    </>
  );
};
export default PictureUpload;
