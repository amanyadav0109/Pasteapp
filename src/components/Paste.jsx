import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import { Share2 } from "lucide-react"; // Share2 is a common share icon

import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../data/formatDate";
import "./paste.css";// Import plain CSS

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
  };

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="paste-container">
      <div className="paste-inner">
        {/* Search */}
        <div className="paste-search">
          <input
            type="search"
            placeholder="Search paste here..."
            className="paste-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* All Pastes */}
        <div className="all-pastes">
          <h2 className="all-pastes-title">All Pastes</h2>
          <div className="pastes-list">
            {filteredPastes.length > 0 ? (
              filteredPastes.map((paste) => (
                <div key={paste?._id} className="paste-item">
                  {/* heading and Description */}
                  <div className="paste-item-left">
                    <p className="paste-title">{paste?.title}</p>
                    <p className="paste-content">{paste?.content}</p>
                  </div>

                  {/* icons and date */}
                  <div className="paste-item-right">
                    <div className="paste-actions">
                      <a
                        href={`/?pasteId=${paste?._id}`}
                        className="icon-button"
                      >
                        <PencilLine size={20} className="icon-pencil" />
                      </a>
                      <button
                        className="icon-button"
                        onClick={() => handleDelete(paste?._id)}
                      >
                        <Trash2 size={20} className="icon-trash" />
                      </button>
                      <a
                        href={`/pastes/${paste?._id}`}
                        target="_blank"
                        className="icon-button"
                      >
                        <Eye size={20} className="icon-eye" />
                      </a>
                      <button
                        className="icon-button"
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("Copied to Clipboard");
                        }}
                      >
                        <Copy size={20} className="icon-copy" />
                      </button>
                      <button
                        className="icon-button"
                        onClick={() => {
                          const url = window.location.href;
                          if (navigator.share) {
                            navigator.share({
                              title: "Check out this paste",
                              text: "Here is something interesting I wrote:",
                              url,
                            });
                          } else {
                            navigator.clipboard
                              .writeText(url)
                              .then(() => alert("URL copied to clipboard!"))
                              .catch(() => alert("Failed to copy URL"));
                          }
                        }}
                      >
                        <Share2 size={20} className="icon-share" />
                        
                      </button>
                    </div>
                    <div className="paste-date">
                      <Calendar size={20} />
                      <span>{FormatDate(paste?.createdAt)}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data">No Data Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paste;
