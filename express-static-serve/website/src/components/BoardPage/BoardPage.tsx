import React from 'react';
import classes from './BoardPage.module.css';
import { BoardPageProps } from './BoardPageProps';

const BoardPage = ({ boardMembers }: BoardPageProps) => {
  return (
    <div className="pageWrapper">
      <h1>Meet The Board</h1>
      {boardMembers.map((boardMember) => {
        return (
          <section
            className={classes.boardMember + ' colorful-bottom-border'}
            key={boardMember.title}
          >
            <figure className={classes.figure}>
              <img
                className={classes.image}
                src={boardMember.imageName}
                alt={`${boardMember.name} (${boardMember.title})`}
              ></img>
              <figcaption className={classes.figureCaption}>
                {boardMember.imageDescription}
              </figcaption>
            </figure>
            <div className={classes.details}>
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
