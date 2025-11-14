export async function getArtData(departmentId: string, count: number) {
    // Fetch all object IDs in the department
    const deptRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`);
    if (!deptRes.ok) {
      throw new Error("Failed to fetch department objects");
    }
  
    const deptData = await deptRes.json();
    const allObjectIDs = deptData.objectIDs || [];
  
    if (allObjectIDs.length === 0) {
      throw new Error("No objects found in this department");
    }
  
    const shuffled = allObjectIDs.sort(() => 0.5 - Math.random());
  
    const artItems = [];
  
    for (let i = 0; i < shuffled.length && artItems.length < count; i++) {
      const id = shuffled[i];
      const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      if (!res.ok) continue;
      const data = await res.json();
      if (data && data.primaryImageSmall) {
        artItems.push(data);
      }
    }
  
    return artItems;
  }
  
  