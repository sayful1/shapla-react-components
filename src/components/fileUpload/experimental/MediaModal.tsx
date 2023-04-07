import React, { FC, useState } from "react";
import {
  Button,
  FileUploader,
  ImageContainer,
  Modal,
  ShaplaTab,
  ShaplaTabs,
} from "../../../index";
import { ImageDataInterface } from "../helper/interfaces";

interface Props {
  active?: boolean;
  title?: string;
  multiple?: boolean;
  url: string;
  modalButtonText?: string;
  notFoundText?: string;
  images?: ImageDataInterface[];
  onnCloseModal?: () => void;
  onSuccess?: () => void;
  onFail?: () => void;
  onSelected?: (images: ImageDataInterface[] | ImageDataInterface) => void;
}

const MediaModal: FC<Props> = ({
  url,
  multiple = false,
  active = false,
  title = "Media Images",
  modalButtonText = "Set Image",
  notFoundText = "No Image Found",
  images = [],

  onnCloseModal,
  onSuccess,
  onFail,
  onSelected,
}) => {
  const [selectedImages, setSelectedImages] = useState<ImageDataInterface[]>(
    []
  );
  const itemClasses = (image: ImageDataInterface) => {
    const classes = ["shapla-media-modal__item"];

    if (selectedImages.length) {
      selectedImages.forEach((_image) => {
        if (_image.image_id === image.image_id) {
          classes.push("is-selected");
        }
      });
    }

    return classes.join(" ");
  };
  const selectImage = (image: ImageDataInterface) => {
    if (multiple) {
      setSelectedImages([...selectedImages, image]);
    } else {
      setSelectedImages([image]);
    }
  };
  const chooseImage = () => {
    onSelected && onSelected(multiple ? selectedImages : selectedImages[0]);
    onnCloseModal && onnCloseModal();
  };
  const [selectedTab, setSelectedTab] = useState("Upload Images");

  return (
    <div className="shapla-media-modal">
      <Modal
        active={active}
        title={title}
        contentSize="large"
        type="card"
        onClose={onnCloseModal}
        footer={
          <>
            <Button
              theme="primary"
              disabled={!selectedImages.length}
              onClick={chooseImage}
            >
              {modalButtonText}
            </Button>
          </>
        }
      >
        <div className="shapla-media-modal__inside">
          <ShaplaTabs
            onChangeTab={(e) => setSelectedTab(e.props.name)}
            alignment="center"
          >
            <ShaplaTab
              name="Upload Images"
              selected={selectedTab == "Upload Images"}
            >
              <FileUploader url={url} onSuccess={onSuccess} onFail={onFail} />
            </ShaplaTab>
            <ShaplaTab
              name="Media Library"
              selected={selectedTab == "Media Library"}
            >
              {images.length ? (
                <div className="shapla-media-modal__items">
                  {images.map((_image) => {
                    return (
                      <div
                        key={_image.image_id}
                        className={itemClasses(_image)}
                        onClick={() => selectImage(_image)}
                      >
                        <div className="shapla-media-modal__image">
                          <ImageContainer
                            containerWidth="100px"
                            containerHeight="100px"
                          >
                            <img
                              src={_image.attachment_url}
                              alt={_image.title}
                            />
                          </ImageContainer>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="no-item-found">{notFoundText}</div>
              )}
            </ShaplaTab>
          </ShaplaTabs>
        </div>
      </Modal>
    </div>
  );
};

export default MediaModal;
