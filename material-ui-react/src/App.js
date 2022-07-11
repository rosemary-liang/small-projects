import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "15px 30px",
  },
});

function StyledButton() {
  const classes = useStyles();
  return <Button className={classes.root}>TEST STYLED BUTTON</Button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledButton></StyledButton>

        <Button
          onClick={() => alert("hello")}
          href="#"
          variant="contained"
          color="secondary"
          size="large"
        >
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
