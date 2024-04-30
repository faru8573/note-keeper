import React, { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const titleRef = useRef();
  const contentRef = useRef();
  const [isClicked, setIsClicked] = useState(false);
  function handleAdd(event) {
    const textTitle = titleRef.current.value;
    const textContent = contentRef.current.value;
    props.addNote({ title: textTitle, content: textContent });
    titleRef.current.value = "";
    contentRef.current.value = "";
    event.preventDefault();
  }

  function expand() {
    setIsClicked(true);
  }
  return (
    <div>
      <form className="create-note">
        {isClicked && <input name="title" placeholder="Title" ref={titleRef} />}

        <textarea
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          ref={contentRef}
        />
        <Zoom in={isClicked}>
          <Fab onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
