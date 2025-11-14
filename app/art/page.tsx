import { getArtData } from './utils';
import styles from './page.module.css';
import ArtCard from './components/ArtCard';

interface SearchParams {
  searchParams: { departmentId?: string; count?: string };
}

export default async function ArtPage({ searchParams }: SearchParams) {
  // Parse parameters with fallback defaults
  const validDepartments = [
    "1", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",
    "14", "15", "16", "17", "18", "19", "21"
  ];
  
  // Make sure it's always a string
  const departmentIdFromParams = searchParams.departmentId ?? "11";
  
  const departmentId = validDepartments.includes(departmentIdFromParams)
    ? departmentIdFromParams
    : "11"; // fallback default
  
  const count = Math.min(parseInt(searchParams.count || "6"), 20);

  let artItems = [];
  let deptTitle = "Unknown Department";

  try {
    artItems = await getArtData(departmentId, count);

    // Fetch department list to get the title
    const deptRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/departments`);
    const deptData = await deptRes.json();
    const match = deptData.departments.find(
      (d: any) => d.departmentId.toString() === departmentId
    );
    deptTitle = match ? match.displayName : deptTitle;
  } catch (e) {
    return <div className={styles.error}>Error loading data: {(e as Error).message}</div>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Art from the department of {deptTitle}</h1>
      <div className={styles.grid}>
        {artItems.map((item) => (
          <ArtCard key={item.objectID} data={item} />
        ))}
      </div>
    </main>
  );
}
