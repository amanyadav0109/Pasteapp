import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ViewPaste.css"; // Import the CSS file

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((p) => p._id === id);

  if (!paste) return <div>Paste not found</div>;

  return (
    <div className="viewpaste-container">
      <input
        type="text"
        placeholder="Title"
        value={paste.title}
        disabled
        className="title-input"
      />

      <div className="paste-card">
        <div className="paste-card-header">
          <div className="circles">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
          </div>
          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(paste.content);
              toast.success("Copied to Clipboard");
            }}
          >
            <Copy size={20} />
          </button>
        </div>

        <textarea
          value={paste.content}
          disabled
          placeholder="Write Your Content Here...."
          className="paste-textarea"
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
