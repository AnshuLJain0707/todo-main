import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './Action';

const initialList:object[] = []

export const Reducer = (state = initialList,action : any) => {

  switch(action.type){
      case ADD_TODO :   
           return [...state,action.payload];

      case DELETE_TODO :    
            const newEmps = [...state];
            const index = state.findIndex((item : any) => item.id === action.payload.empId);
            newEmps.splice(index, 1);
            return newEmps
        
    case UPDATE_TODO :   
                 const newEmp = [...state]
    
                 const index1= state.findIndex( (item : any) => item.id === action.payload.id)

                newEmp[index1] = {
                    id: action.payload.id ,
                    fullName: action.payload.fullName ,
                    address: action.payload.address ,
                    phoneNumber: action.payload.phoneNumber ,
                    email: action.payload.email ,
                };
               return newEmp

    default:
			return state;
      

  }
}


