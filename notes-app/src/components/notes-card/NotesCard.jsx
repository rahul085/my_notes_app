import React from "react";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { useNotes } from "../../context/notes-context";
import { findNotesInBin } from "../../utils/findNotesInBin";
import { findNotesInImportant } from "../../utils/findNotesInImportant";

const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive, bin, important } = useNotes();

  const isNotesInArchive = findNotesInArchive(archive, id);
  const isNotesInBin = findNotesInBin(bin, id);
  const isNotesInImportant = findNotesInImportant(important, id);

  const onPinClick = (id) => {
    console.log("before click isPinned:", isPinned);
    // Now comes the concept of Context......
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  //   const onDeleteClick = async (id) => {
  //     // !isNotesInBin
  //     //   ? notesDispatch({
  //     //       type: "ADD_TO_BIN",
  //     //       payload: { id },
  //     //     })
  //     //   : notesDispatch({
  //     //       type: "REMOVE_FROM_BIN",
  //     //       payload: { id },
  //     //     });

  //     if(isNotesInBin){
  //         try{
  //             // sending a delete request to spring boot.
  //             const response=await fetch(`http://localhost:8000/api/notes/${id}`,
  //                 {
  //                     method:"DELETE"
  //                 });
  //             if(response.ok){
  //                 // only if the delete is successfull , update the ui
  //                 notesDispatch({
  //                     type:"REMOVE_FROM_BIN",
  //                     payload:{id}
  //                 });

  //             }
  //         } catch(error){
  //             console.error("Error deleting from Oracle:",error);
  //         }
  //     } else{
  //         notesDispatch({
  //             type:"ADD_TO_BIN",
  //             payload:{id}
  //         });
  //     }
  //   };

  const onPermanentDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/notes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // only if the delete is successfull , update the ui
        notesDispatch({
          type: "REMOVE_FROM_BIN",
          payload: { id },
        });
      }
    } catch (error) {
      console.error("Error deleting from Oracle:", error);
    }
  };

  const onToggleBin = async (id, currentBinStatus) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/notes/${id}/toggle-bin`,
        {
          method: "PATCH",
        },
      );
      if (response.ok) {
        if (!currentBinStatus) {
          notesDispatch({
            type: "ADD_TO_BIN",
            payload: { id },
          });
        } else {
          notesDispatch({
            type: "RESTORE_FROM_BIN",
            payload: { id },
          });
        }
      }
    } catch (error) {
      console.error("Failed to sync with oracle:", error);
    }
  };

  const onBookmarkClick = (id) => {
    !isNotesInImportant
      ? notesDispatch({
          type: "ADD_TO_IMPORTANT",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_IMPORTANT",
          payload: { id },
        });
  };

  const onEditClick = (id) => {
    notesDispatch({
      type: "EDIT",
      payload: { id },
    });
  };

  return (
    <div className="w-56 border border-indigo-300 p-3 rounded-xl shadow-md bg-indigo-50 hover:bg-indigo-100 transition-all">
      <div className="flex justify-between ">
        <div>
          <p className="font-semibold text-gray-800 text-base tracking-wide ">
            {title}
          </p>
        </div>
        <div className="flex gap-1">
          {!isNotesInArchive && !isNotesInBin ? (
            <button onClick={() => onPinClick(id)} className="cursor-pointer">
              <span
                className={
                  isPinned
                    ? "material-icons text-indigo-600"
                    : "material-icons-outlined text-gray-400"
                }
              >
                push_pin
              </span>
            </button>
          ) : (
            <></>
          )}

          {!isNotesInImportant ? (
            <button
              onClick={() => onBookmarkClick(id)}
              className="cursor-pointer"
            >
              <span className="material-icons-outlined">bookmark_border</span>
            </button>
          ) : (
            <button
              onClick={() => onBookmarkClick(id)}
              className="cursor-pointer"
            >
              <span className="material-icons-outlined">bookmark</span>
            </button>
          )}
        </div>
      </div>
      <hr className="border-gray-400 my-1" />
      <div className="flex flex-col gap-2 ">
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{text}</p>

        <div className="flex justify-between mt-5 ">
          <div className="flex">
            {
                !isNotesInBin ? (
                    <button onClick={() => onEditClick(id)}>
              <span className="material-icons-outlined  text-gray-400 cursor-pointer  hover:text-indigo-600 transition-colors">
                edit
              </span>
            </button>
                ):<></>
            }
            
          </div>

          <div className="flex ">
            {!isNotesInBin ? (
              <>
                <button
                  onClick={() => onArchiveClick(id)}
                  className="cursor-pointer hover:text-indigo-600 transition-colors"
                >
                  <span
                    className={`material-icons-outlined transition-colors
    ${isNotesInArchive ? "text-indigo-600" : "text-gray-400 hover:text-indigo-600"}`}
                  >
                    archive
                  </span>
                </button>

                <button
                  onClick={() => onToggleBin(id, isNotesInBin)}
                  className="cursor-pointer"
                >
                  <span className="material-icons-outlined text-gray-400  hover:text-red-500 transition-colors">
                    delete
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onToggleBin(id, isNotesInBin)}
                  className="cursor-pointer mr-2 "
                  title="restore"
                >
                  <span className="material-icons-outlined text-gray-400 hover:text-green-600 tranisiton-colors">
                    restore_from_trash
                  </span>
                </button>

                <button
                  onClick={() => onPermanentDelete(id)}
                  title="Delete Forever"
                  className="cursor-pointer"
                >
                  <span className="material-icons-outlined text-gray-400  hover:text-red-600">
                    delete_forever
                  </span>
                </button>
              </>
            )}

            {/* <button
              onClick={() => onToggleBin(id, isNotesInBin)}
              className="cursor-pointer"
            >
              <span className="material-icons-outlined hover:text-red-500 transition-colors">
                {isNotesInBin ? "restore_from_trash" : "delete"}
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
