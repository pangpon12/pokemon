import Axios from 'axios'
import { useState } from 'react'
import './App.css';
import useSound from 'use-sound';
import song from './gacha.mp3';
import theme from './song.mp3';
function App() {

  const [employeeList, setemployeeList] = useState(null);

  const [play] = useSound(song);

  const [themep] = useSound(theme);

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


  return (
    <div class="center">
      <h1 style={{ color: 'DimGray' }}>สุ่ม pokemon ของคุณ</h1>

      <div style={{ color: 'DimGray' }}>จัดทำโดยนายธีรภัทร แสงราช ใช้เพื่อยื่น portfolio เท่านั้น</div>


      <br></br>


      <button onClick={themep}>เปิดเพลง
      </button>


      <br></br>

      <button onClick={twoF}>สุ่มโปเกม่อน</button>

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