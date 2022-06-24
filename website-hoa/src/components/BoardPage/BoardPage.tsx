import './BoardPage.css';
import React from 'react';
import { BoardPageProps } from './BoardPageProps';

const BoardPage = ({ boardMembers }: BoardPageProps) => {
  return (
    <div className="pageWrapper">
      <h1>Meet The Board</h1>
      {boardMembers.map((boardMember) => {
        return (
          <section
            className="boardMember colorful-bottom-border"
            key={boardMember.title}
          >
            <figure>
              <img
                src={boardMember.imageName}
                alt={`Photo of ${boardMember.name} (${boardMember.title})`}
              ></img>
              <figcaption aria-hidden>
                {boardMember.imageDescription}
              </figcaption>
            </figure>
            <div className="details">
              <p>
                <span className="fieldTitle">{boardMember.title}</span> -{' '}
                {boardMember.name}
              </p>

              <p>{boardMember.titleDescription}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default BoardPage;
