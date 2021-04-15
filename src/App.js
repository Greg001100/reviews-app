import React, { useState, useEffect } from 'react';
import fb from './fbconfig';
const db= fb.firestore();

function App() {

  const [num, setNum] = useState(null)

  useEffect(() => {
    const awaitCount= async () => {
      const count = await db.collection('counter').doc('count').get();
      await setNum(count.data());
    }
    awaitCount();
  }, [])

  if (num) {
    console.log(num)
    return (
      <h1>Colorado Carrier Co. Reviews</h1>
    );
  }
   else return <h1>waiting</h1>
}

export default App;
