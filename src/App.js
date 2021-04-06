import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css'

const projectID = 'eaf0909f-b03f-4278-b4a4-4ff24b3bf29e';


const App =() =>{
  if (!localStorage.getItem('username')) return <LoginForm />;

  return(
    <ChatEngine
    height='100vh'
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
			projectID={projectID}
      renderChatFeed ={(chatApprops)=>< ChatFeed {...chatApprops} /> }
    >

    </ChatEngine>
  )
}


export default App;