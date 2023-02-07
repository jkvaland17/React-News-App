import React from "react";
import { useGlobalContext } from "./Contex";
import PuffLoader from "react-spinners/PuffLoader";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  return (
    <>
      <div className="stories-div">
        {isLoading ? (
          <PuffLoader color={"#15133c"} size={100} />
        ) : (
          <>
            {hits.map((curPost) => {
              const { title, author, objectID, url, num_comments } = curPost;
              return (
                <div className="card" key={objectID}>
                  <h2>{title}</h2>
                  <p>
                    By <span> {author}</span> | <span> {num_comments} </span>
                    comments
                  </p>
                  <div className="card-button">
                    <a href={url} target="_blank" rel="noreferrer">
                      Read More
                    </a>
                    <button onClick={() => removePost(objectID)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Stories;
