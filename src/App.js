import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <Content>
        <h2>Welcome to My First Website</h2>
        <p>I have used props.</p>
        <UserProfile 
          name="DHARSHANA " 
          email="dharshanav.22it@kongu.edu" 
          bio="Student pursuing BTECH in Information technology with a passion for learning new technologies." 
        />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
