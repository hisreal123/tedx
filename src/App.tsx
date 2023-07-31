import React from 'react';
import { Mobile } from './components/mobile'
import { Large } from './components/large'



function App() {
  return (
    <>
      <section>
        <Large style="hidden md:block" />
        <Mobile style="sm:block md:hidden" />
      </section>
    </>
  );
}

export default App;
