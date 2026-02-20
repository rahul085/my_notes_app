import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import NotesCard from "../../components/notes-card/NotesCard";
import { useNotes } from "../../context/notes-context";

const Home = () => {
  const { title, text, notes, archive, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddCick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);


    console.log(archive);
    
    
  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col  w-screen mt-7">
          <div className="flex flex-col w-113  relative self-center">
            <input
              onChange={onTitleChange}
              value={title}
              className="border border-neutral-800 rounded-t-md focus: outline-none border-b-0 p-1"
              type="text"
              placeholder="Enter title"
            />

            <textarea
              onChange={onTextChange}
              value={text}
              className="border h-[100px] border-neutral-800 rounded-b-md focus: outline-none border-t-0 p-1"
              placeholder="Enter text"
            ></textarea>

            <button
              disabled={title.length === 0}
              onClick={onAddCick}
              className="w-7 h-7 absolute bottom-0 right-0  bg-indigo-600 cursor-pointer text-slate-50 rounded-full"
            >
              {" "}
              <span className="material-icons">add</span>
            </button>
          </div>

          <div className="mt-14 ml-10 flex flex-col gap-5">
            {pinnedNotes?.length > 0 && (
              <div>
                <h3 className=" font-bold">Pinned Notes</h3>
                <div className=" flex flex-wrap gap-6 ">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ id, title, text, isPinned }) => (
                      <NotesCard
                        key={id}
                        id={id}
                        title={title}
                        text={text}
                        isPinned={isPinned}
                      />
                    ))}
                </div>
              </div>
            )}
            <div>
              {pinnedNotes?.length > 0 && (
                <h3 className="font-bold">Other Notes</h3>
              )}
              <div className=" flex flex-wrap gap-6  ">
                {otherNotes?.length > 0 &&
                  otherNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
