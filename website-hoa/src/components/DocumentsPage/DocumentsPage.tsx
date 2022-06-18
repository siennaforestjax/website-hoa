import './DocumentsPage.css';
import HoaDocument from '../../interfaces/HoaDocument';

type DocumentsPageProps = {
  documents: Array<HoaDocument>;
};

function DocumentsPage({ documents }: DocumentsPageProps) {
  const meetingMinutes = documents.filter((x) => x.type == 'meetingMinutes');

  function getFullFilePath(document: HoaDocument) {
    return `${document.location}/${document.name}`;
  }

  return (
    <div className="pageWrapper">
      <h1>Documents</h1>
      <h2>HOA Meeting Notes</h2>
      <ul>
        {meetingMinutes.map((x) => {
          const fullFilePath = getFullFilePath(x);
          return (
            <li key={x.name}>
              <a
                href={fullFilePath}
                target="_blank"
                rel="nofollow noreferrer noopener"
                download
              >
                {x.name} ({x.size})
              </a>
            </li>
          );
        })}
      </ul>
      <h2>Community Documents</h2>
      <ul>
        <li>Covenants & Restrictions</li>
        <li>Proxy Form</li>
        <li>Contact List (log in)</li>
      </ul>
    </div>
  );
}

export default DocumentsPage;
