import React from 'react';
import ImageWithLoadingFallback from '../ImageWithLoadingFallback/ImageWithLoadingFallback';
import classes from './BoardPage.module.css';
import BoardMember from '../../interfaces/BoardMember';

export type BoardPageProps = {
  boardMembers: Array<BoardMember>;
};


const sourceUrl = process.env.REACT_APP_API_URL;

const BoardPage = ({ boardMembers }: BoardPageProps) => {
  return (
    <>
      <h1>Meet The Board</h1>
      {boardMembers.map((boardMember) => {
        return (
          <section
            className={classes.boardMember + ' colorful-bottom-border'}
            key={boardMember.title}
          >
            <figure className={classes.figure}>
              <ImageWithLoadingFallback source={`${sourceUrl}/${boardMember.imageName}`} altText={`${boardMember.name} (${boardMember.title})`}/>
              
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
    </>
  );
};

export default BoardPage;
