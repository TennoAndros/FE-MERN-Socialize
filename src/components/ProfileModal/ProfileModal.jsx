import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

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
        <form action="" className="InfoForm">
          <h3>Info</h3>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="First Name"
              placeholder="First Name"
              aria-label="Enter first name"
            />
            <input
              type="text"
              className="InfoInput"
              name="Last Name"
              placeholder="Last Name"
              aria-label="Enter last name"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="WorksAt"
              placeholder="Works at"
              aria-label="Edit workplace"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="Location"
              placeholder="Location"
              aria-label="Enter your location"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="Relationship Status"
              placeholder="Relationship Status"
              aria-label="Enter your relationship status"
            />
          </div>
          <div>
            <input
              type="text"
              className="InfoInput"
              name="Hobbies"
              placeholder="Hobbies"
              aria-label="Enter your hobbies"
            />
          </div>
          <div>
            Profile Image
            <input
              type="file"
              name="ProfileImage"
              aria-label="Upload a profile image"
            />
            Cover Image
            <input
              type="file"
              name="CoverImage"
              aria-label="Upload a cover image"
            />
          </div>
          <button className="Button InfoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}
export default ProfileModal;
