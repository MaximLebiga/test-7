import { useState } from 'react';
import './App.css';
import ContentLayout from './components/layouts/ContentLayout'
import TextBlock from './components/views/TextBlock/TextBlock';
import { v4 as uuidv4 } from 'uuid'
import PageLayout from './components/layouts/PageLayout'


function App() {
  const [textBlocksId, setTextBlocksId] = useState<Array<string>>([])

  const handleButtonClick = () => {
    setTextBlocksId((prevState) => [...prevState, uuidv4()])
  }

  return (
    <div className="App">
      <ContentLayout action={handleButtonClick} text="Create row">
        <PageLayout>
          {textBlocksId.map((id) => (
            <TextBlock key={id} />
          ))}
        </PageLayout>
      </ContentLayout>
    </div>
  )
}

export default App;
