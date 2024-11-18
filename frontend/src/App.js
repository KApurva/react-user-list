import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [userAdded, setUserAdded] = useState(false);

  return (
    
      <div class="container-fluid overflow-hidden text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
            <h1 className='text-info'>Add User</h1>
            <UserForm onUserAdded={() => setUserAdded(!userAdded)} />
            </div>
          </div>
          <div class="col">
            <div class="py-3">
            <h1 className='text-info'>User List</h1>
            <UserList key={userAdded} />
            </div>
          </div>
        </div>
   
      
     
    </div>
  );
};

export default App;
