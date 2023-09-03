import logo from './logo.svg';
import './App.css';
import myImage from './Assets/stayTuned.PNG';

function App() {
  const style = {
    paddingTop: '9.5%',
    paddingLeft: '20%'
  }

  const parentCss = {
    backgroundColor: '#060524',
    height: '100vh'
    }
  return (
    <div>
      {/* <Header></Header> */}

      {/* <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Login></Login>
        </Grid>
      </Grid> */}
      <img src={myImage} width="60%"
        height="400" style={style} alt="Description of the image" />
    </div>
  );
}

export default App;
