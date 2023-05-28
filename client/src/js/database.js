import { openDB } from 'idb';

const database = "jate"

const initdb = async () =>
  openDB(database, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(database)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(database, { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const openTheDB = await openDB(database, 1);
  const transaction1 = openTheDB.transaction(database, 'readwrite');
  const theStore = transaction1.objectStore(database);

  const request = theStore.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};

export const getDb = async () => {
  const openTheDB = await openDB(database, 1);
  const transaction1 = openTheDB.transaction(database, 'readonly');
  const theStore = transaction1.objectStore(database);
  const request = theStore.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
  const request = store.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');

  return result?.value;
};

initdb();
