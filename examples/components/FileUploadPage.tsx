import React from "react";
import { FeaturedImage, FileUploader } from "../../src/index";
import DocTab from "./components/DocTab";
import { MediaModal } from "../../src";

const FileUploadPage = () => {
  const properties = {
    url: { type: String, default: null, required: true },
    method: { type: String, default: "POST" },
    paramName: { type: String, default: "file" },
    textLineOne: { type: String, default: "Drag &amp; drop files" },
    textLineTwo: { type: String, default: "or" },
    textButton: { type: String, default: "Select files to upload" },
    textMaxUploadLimit: {
      type: String,
      default: "Maximum upload file size: 2MB",
    },
    params: { type: Object, required: false },
    headers: { type: Object, required: false },
    showFileUploadStatus: { type: Boolean, default: true },
    showFilesUploadStatus: { type: Boolean, default: true },
    chunking: { type: Boolean, default: false },
    forceChunking: { type: Boolean, default: false },
    chunkSize: { type: Number, default: 2000000 },
    onSuccess: { type: Function, required: false },
    onFail: { type: Function, required: false },
  };
  const descriptions = {};

  const [showUploadModal, setShowUploadModal] = React.useState(false);
  return (
    <DocTab
      heading="File Uploader"
      slug="shapla-file-uploader"
      name="ShaplaFileUploader"
      scss-mixin="file-uploader"
      properties={properties}
      desc={descriptions}
    >
      <FileUploader url="https://wordpress.test" />
      <div style={{ marginTop: 100 + "px" }}>
        <FeaturedImage onAddImages={() => setShowUploadModal(true)} />
      </div>
      <MediaModal
        active={showUploadModal}
        url="https://wordpress.test"
        onnCloseModal={() => setShowUploadModal(false)}
      />
    </DocTab>
  );
};
export default FileUploadPage;
