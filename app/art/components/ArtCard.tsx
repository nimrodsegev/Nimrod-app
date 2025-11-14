'use client';
import styles from './ArtCard.module.css';

interface Props {
  data: {
    title: string;
    artistDisplayName: string;
    primaryImageSmall: string;
    objectDate: string;
    objectName: string;
    medium: string;
    culture: string;
  };
}

export default function ArtCard({ data }: Props) {
  return (
    <div className={styles.card}>
      <img src={data.primaryImageSmall} alt={data.title} className={styles.image} />
      <h2 className={styles.title}>{data.title}</h2>
      <p><strong>Artist:</strong> {data.artistDisplayName || "Unknown"}</p>
      <p><strong>Date:</strong> {data.objectDate}</p>
      <p><strong>Type:</strong> {data.objectName}</p>
      <p><strong>Medium:</strong> {data.medium}</p>
      <p><strong>Culture:</strong> {data.culture}</p>
    </div>
  );
}
