import React from 'react'

function Edit({editFormData , handleEditForm , handleCancelClick , handleEditSubmit} : {editFormData : any, handleEditForm : any, handleCancelClick : any, handleEditSubmit : any}) {
  return (
   <tr key={editFormData.id}>
       <td>
       <input type="text" name = "fullName" value={editFormData.fullName}  placeholder='enter a name' onChange={handleEditForm} />
          
       </td>
       <td>
       
          <input type="text" name = "address" value={editFormData.address}  placeholder='enter the address' onChange={handleEditForm}/>
          
       </td>
       <td>
       
          <input type="text" name = "phoneNumber" value={editFormData.phoneNumber}  placeholder='enter phone number' onChange={handleEditForm} />
          
       </td>

       <td>
      
          <input type="email" name = "email" value={editFormData.email}  placeholder='enter email ' onChange={handleEditForm}/>
       </td>
       <td>
           <button type='button' onClick={handleEditSubmit}>Save</button>
           <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
       </td>

   </tr>
  )
}

export default Edit
