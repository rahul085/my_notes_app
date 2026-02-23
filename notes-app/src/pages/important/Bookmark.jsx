import React from "react";
import { useNotes } from "../../context/notes-context";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import NotesCard from "../../components/notes-card/NotesCard";
const Bookmark = () => {
  const { important } = useNotes();
  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div>
          <div className="flex flex-wrap gap-6  w-screen mt-7">
            {important?.length > 0 &&
              important.map(({ id, title, text, isPinned }) => (
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
      </main>
    </>
  );
};

export default Bookmark;
