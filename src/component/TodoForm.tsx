import React , {useState, Fragment} from 'react'
import {nanoid} from 'nanoid' 
import Readonly from './Readonly'
import Edit from './Edit'
import {addTodo , deleteTodo , updateTodo} from '../redux/Action'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'

interface heading{
    
    name : string,
    address : any ,
    phoneNumber : any,
    email : string,
}


function TodoForm() {
  
let todos:any = useSelector( state=> state);


const [post , setPost] =useState<heading>({
    name : '',
    address : '',
    phoneNumber : '',
    email : ''
})

const [editEmpId , setEditEmpId] = useState(null);

const [addData , setAddData] = useState({
    fullName : '',
    address : '',
    phoneNumber : '',
    email : ''
})

const [editFormData,setEditFormData] =useState({
    fullName : '',
    address : '',
    phoneNumber : '',
    email : ''
})

const dispatch = useDispatch();

useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => {
       setPost(res.data)
     
    })
    
}) 


const handleEditForm = async(e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();

    const fieldName : any= e.target.getAttribute('name');
    const fieldValue: any= e.target.value;
    
    const newFormData : any= {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData)

}

const handleAdd = (e: React.ChangeEvent<HTMLInputElement>)=>  {
    e.preventDefault();

    const fieldName : any = e.target.getAttribute('name');
    const fieldValue : any= e.target.value;

    const newFormData : any= {...addData};
    newFormData[fieldName] = fieldValue;
    
    setAddData(newFormData);
    console.log(addData)
    

    
 

}



const add = (e: React.ChangeEvent<HTMLButtonElement>)=>{
    dispatch(addTodo ({
    id: nanoid(),
    fullName: addData.fullName,
    address: addData.address,
    phoneNumber: addData.phoneNumber,
    email: addData.email
    }))
    
    
    e.preventDefault();

} 

const addPost =  (e: React.ChangeEvent<HTMLButtonElement>) => {
    // e.preventDefault()
     
     let newPost : any ={...addData}
         newPost = {
         fullName : post.name,
         address : post.address.street,
         phoneNumber : post.address.zipcode,
         email : post.email,
     }
     setAddData(newPost)
     console.log(addData)
     add(e)
 }


const handleEditSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
   

    dispatch(updateTodo ({ 
    id : editEmpId,
    fullName: editFormData.fullName,
    address: editFormData.address,
    phoneNumber: editFormData.phoneNumber,
    email: editFormData.email
    }))

    setEditEmpId(null);

}

const handleEditClick =(e: React.ChangeEvent<HTMLInputElement>,employee : any) =>{
    e.preventDefault();
    setEditEmpId(employee.id)

    const formValues = {
    fullName: employee.fullName,
    address: employee.address,
    phoneNumber: employee.phoneNumber,
    email: employee.email
    }

    setEditFormData(formValues)
}



const handleCancelClick = () => {
    setEditEmpId(null);
  };


  const handleDeleteClick = (empId : any) => {
    dispatch(deleteTodo ({ empId}))
  };


  return (
    <div>
        <form>
        <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
       
               {
                todos.map ((item:any ,i:any)  => (
                   
                    <Fragment>
                        
                        { editEmpId == item.id ?  
                        (<Edit  key={i}editFormData = {editFormData}  handleEditForm={handleEditForm} handleCancelClick={handleCancelClick} handleEditSubmit={handleEditSubmit}/> ): 
                        (<Readonly key={i} item={item} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>) }
                    </Fragment>
                 
                ) ) }

              
          </tbody>
      </table>
     
        </form>
      
    
      <h2>Add employee</h2>
      <form >
          <input type="text" name = "fullName" id = "fullName"  placeholder='enter a name' onChange={handleAdd}/>
          <input type="text" name = "address" id = "address" placeholder='enter the address' onChange={handleAdd}/>
          <input type="text" name = "phoneNumber" id = "phoneNumber" placeholder='enter phone number' onChange={handleAdd}/>
          <input type="email" name = "email" id = "email"  placeholder='enter email 'onChange={handleAdd}/>
          <button onClick={ (e:any)=>add(e)} >ADD</button>

        
      </form>
      <div>
      <h2>Add Random Employee</h2>

       <button onClick={ (e:any)=>addPost(e)} >Add API data</button>
       
      </div>
     
      
    </div>
  )
}

export default TodoForm
