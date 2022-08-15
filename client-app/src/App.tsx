import React from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from "semantic-ui-react";

const App = () => {
  const [activities, setActiviities] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActiviities(response.data); 
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map((activity: any) => {
          return (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          )
        })}
      </List>
    </div>
  );
}

export default App;
