import { useEffect, useState } from 'react'
import './App.css'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  const [name, Setname] = useState('');
  const [chats, setchats] = useState([]);

  const [msg, Setmsg] = useState('');
  const db = getDatabase();

  const chatlistRef = ref(db, 'chats');

  useEffect(() => {
    onChildAdded(chatlistRef, (data) => {
      // const c = [...chats];
      // c.push(data.val());
      setchats(chats =>[...chats, data.val()]);
    });

    
  }, []);

  const sendchat = () => {


    const chatRef = push(chatlistRef);
    set(chatRef, {
      name, message: msg
    });

    // const c = [...chats];
    // c.push({ name, message: msg });
    // setchats(c);
    Setmsg('');
  }

  return (
    <>

    <div className='mainContainer'>

      {
        name ? null
          :
          <div className='EntryBox'>
             <h3>Hi User, Please Enter your name</h3>
            <input type="text" placeholder='Please enter your name' onBlur={e => Setname(e.target.value)} />
          </div>
      }



      {
        name ?
          <div>
            <h3>User: {name}</h3>
            <div className="chat-container">

              {chats.map((c, index) => (
                <div className={`container ${c.name === name ? 'me' : ''}`} key={index}>
                  <p className='chatbox'>
                    <strong>{c.name}:</strong>
                    <span> {c.message}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className='btm'>
              <input
                onInput={e => Setmsg(e.target.value)}
                type="text"
                placeholder='enter your message'
                value={msg}
              />
              <button onClick={(e) => { e.preventDefault(); sendchat(); }}>Send</button>
            </div>
          </div> : null
      }

    </div>

    </>
  )
}

export default App
