export const snapshotToDocs = (snapshot) => {
  const docs = []
  snapshot.forEach(doc => { docs.push(doc.data()) })
  return docs
}
