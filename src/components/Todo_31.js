import {useState} from 'react'
import Modal_31 from  './Modal_31'
import Backdrop_31 from './Backdrop_31'

function Todo_31(props) {
    const [showModal, setShowModal] = useState(); //記錄modal有沒有跳出來


    function showModalHandler(){
        setShowModal(true);
    }

    function closeModalHandler(){
        setShowModal(false);
    }

    //useState裡面資料被更改時，return內資料會自動重新跑一遍

    return (
        <div>
            <div className="card">
           <h2>{props.text}</h2>
           <div className="actions">
            <button className="btn" onClick={showModalHandler} >Delete</button> 
          </div>
        </div>
        {showModal && <Backdrop_31 onClose={closeModalHandler}/>} 
        {showModal && <Modal_31 text='Really?????' onClose={closeModalHandler}/>}
        </div>
    )
}

export default Todo_31;
