import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profileImage = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverImage = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(params.id, UserData));
    setModalOpened(false);
  };

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size="40%"
        centered
        yOffset="1vh"
        xOffset={0}
      >
        <form action="" className="InfoForm" onSubmit={handleSubmit}>
          <h3>Info</h3>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="firstName"
              placeholder="First Name"
              aria-label="Enter first name"
              onChange={handleChange}
              value={formData.firstName}
            />
            <input
              type="text"
              className="InfoInput"
              name="lastName"
              placeholder="Last Name"
              aria-label="Enter last name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="worksAt"
              placeholder="Works at"
              aria-label="Edit workplace"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="livesIn"
              placeholder="Location"
              aria-label="Enter your location"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="relationshipStatus"
              placeholder="Relationship Status"
              aria-label="Enter your relationship status"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="hobbies"
              placeholder="Hobbies"
              aria-label="Enter your hobbies"
              onChange={handleChange}
            />
          </div>
          <div>
            Profile Image
            <input
              type="file"
              name="profileImage"
              aria-label="Upload a profile image"
              onChange={onImageChange}
            />
            Cover Image
            <input
              type="file"
              name="coverImage"
              aria-label="Upload a cover image"
              onChange={onImageChange}
            />
          </div>
          <button className="Button InfoButton" type="submit">
            Update
          </button>
        </form>
      </Modal>
    </>
  );
}
export default ProfileModal;
