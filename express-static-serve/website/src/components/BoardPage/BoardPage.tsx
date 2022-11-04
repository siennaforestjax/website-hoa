import React from 'react';
import ImageWithLoadingFallback from '../ImageWithLoadingFallback/ImageWithLoadingFallback';
import classes from './BoardPage.module.css';
import BoardMember from '../../interfaces/BoardMember';
import Subcommittee from '../../interfaces/Subcommittee';
import CommitteeMember from '../../interfaces/CommitteeMember';

export type BoardPageProps = {
  boardMembers: Array<BoardMember>;
  subcommittees: Array<Subcommittee>;
};

const sourceUrl = process.env.REACT_APP_API_URL;

const BoardPage = ({ boardMembers, subcommittees }: BoardPageProps) => {
  return (
    <>
      <h1 className='pageTitle'>Meet Your HOA</h1>
      <h2>The Board</h2>
      {boardMembers.map((boardMember) => {
        return (
          <section
            className={classes.boardMember + ' colorful-bottom-border'}
            key={boardMember.title}
          >
            <figure className={classes.figure}>
              <ImageWithLoadingFallback
                source={`${sourceUrl}/${boardMember.imageName}`}
                altText={`${boardMember.name} (${boardMember.title})`}
              />

              <figcaption className={classes.figureCaption}>
                {boardMember.imageDescription}
              </figcaption>
            </figure>
            <div className={classes.details}>
              <p>
                <span className={classes.fieldTitle}>{boardMember.title}</span>{' '}
                -<span className={classes.fieldValue}>{boardMember.name}</span>
              </p>
              <p>
                <a href={`mailto: ${boardMember.emailAddress}`}>
                  {boardMember.emailAddress}
                </a>
              </p>
              <p>{boardMember.titleDescription}</p>
            </div>
          </section>
        );
      })}
      <h2 className={classes.subcommitteeHeader}>Subcommittees</h2>
      <section className={classes.subcommitteeSection}>
        {subcommittees.map((sub: Subcommittee) => {
          return (
            <section
              key={sub.name}
              className={classes.subcommittee + ' colorful-bottom-border'}
            >
              <h3 className={classes.committeeName}>{sub.name}</h3>

              <p>{sub.description}</p>
              <h3 className={classes.subsection}>Objectives</h3>
              <ul className={classes.objectiveList}>
                {sub.objectives.map((obj: string) => {
                  return (
                    <li key={obj} className={classes.objective}>
                      {obj}
                    </li>
                  );
                })}
              </ul>
              <div className={classes.subsection}>
                <div className={`${classes.row} ${classes.headerRow}`}>
                  <span className={classes.rowItem}>Member</span>
                  <span>Role</span>
                </div>
                {sub.representatives.map((rep: CommitteeMember) => {
                  return (
                    <div key={rep.name} className={classes.row}>
                      <span className={classes.rowItem}>{rep.name}</span>
                      <span className={classes.rowItem}>{rep.role}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default BoardPage;
