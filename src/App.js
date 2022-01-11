import Axios from 'axios'
import { useState } from 'react'
import './App.css';
import useSound from 'use-sound';
import song from './gacha.mp3';
import theme from './song.mp3';
import { Button, Icon } from 'semantic-ui-react'

function App() {

  const [employeeList, setemployeeList] = useState(null);

  const [play] = useSound(song);

  const [themep] = useSound(theme);

  const [playm, { stop, isPlaying }] = useSound(theme);



  var i = Math.floor(Math.random() * 890) + 1;
  const getEmployees = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/' + i).then((response) => {
      console.log(response)
      setemployeeList(response.data);
    });
  }

  const twoF = () => {
    getEmployees(); play();
  };

  const ON = () => {
   
      playm();
    
    
  };
  const OFF = () => {
  
  

    stop();
  
};


  return (
    <div class="center">
      <h1 style={{ color: 'black' }}>สุ่ม pokemon ของคุณ</h1>
<Button color='facebook' href ="https://www.facebook.com/teerapat.sangrach.7/" target ="blank">
      <Icon name='facebook' /> Facebook
    </Button>
  
    
    <Button color='github'  href ="https://github.com/pangpon12" target ="blank">
      <Icon name='github' /> github
    </Button>
    
      <div style={{ color: 'black' }}>จัดทำโดยนายธีรภัทร แสงราช ใช้เพื่อยื่น portfolio เท่านั้น</div>


      <br></br>  
<div>สามารถเปิด/ปิดเพลงประกอบได้</div>

      <Button content='สุ่มโปเกม่อน' onClick={twoF}/>

      <Button.Group icon>
    <Button onClick={ON}>
      <Icon name='play' />
    </Button>
    <Button onClick={OFF}>
      <Icon name='pause' />
    </Button>
    
  </Button.Group>


      <br></br>
      
      {employeeList && (



        <div>

          <img src={employeeList.sprites.front_default} width="300" height="360" alt='pokemon' class="image"></img>

          <img src={employeeList.sprites.back_default} width="300" height="360" alt='pokemon' class="image"></img>


          <br></br>

          <div class="colorfornt">
            ชื่อ :{employeeList.name}



            <br></br>
            น้ำหนัก :{employeeList.weight / 10} kg.


            <br></br>
            ส่วนสูง :{employeeList.height / 10} cm.

          </div>


        </div>
      )}


    </div>

  );

}

export default App;