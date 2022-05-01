// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { EditForm } from "./components/EditForm";
function App() {
  const notify = (name) =>
    toast.success(name + "  " + "Deleted Succesfully", { autoClose: 500 });

  const [Data, SetData] = useState([]);
  const [show, Setshow] = useState(false);
  const [FName, setFName] = useState("");
  
  const [alagId,setAlagId]=useState(null)
  // console.log(FName,"Yeh Fname hai ")

  const [email, setEmail] = useState("");
  const [LName, setLName] = useState("");
  const [profile, setProfile] = useState("");
  // console.log(FName, LName, email, profile, "yeh uska Name hai");
  const url = "https://reqres.in/api/users?page=1";
  const getAllData = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.data,"its a Data")
        SetData(res.data.data);
      })
      .catch((error) => {
        // console.log(error,"its a Error")
      });
  };
  useEffect(() => {
    getAllData();
    localStorage.setItem("MyData", JSON.stringify(Data));
  }, [Data]);
  let LocalData = localStorage.getItem("MyData");
  const [meraData, setMeraData] = useState(JSON.parse(LocalData));
  // console.log(meraData,"yeh mera Data Hai ")

  const DelItems = (index) => {
    if (show === true) {
    } else {
      const DelLists = meraData.filter((elem, id) => {
        return index !== elem.id;
      });
      console.log(DelLists, "My List which Deleted");
      setMeraData(DelLists);
    }
  };
  // const EditItems=()=>{

  //   // document.body.style.opacity='0.2'
  // }
  const EditItems = (id) => {
    const EditkaItem = meraData.find((elem) => {
      return elem.id === id;
    });
    setFName(EditkaItem.first_name);
    setLName(EditkaItem.last_name);
    setEmail(EditkaItem.email);
    setProfile(EditkaItem.avatar);
    setAlagId(id)
    // console.log(FName,LName,email,profile,"yeh uska Name hai")
    // console.log(EditkaItem)
    // setToggle(false);
    // setInputData(EditkaItem.name);
    // setIsEditItem(id);
    Setshow(true);
  };
  const subMitEdited=(id)=>{
    // const EditkaItem = meraData.find((elem) => {
    //   return elem.id === id;
    // }); 
    // console.log(EditkaItem,"Mil gaya")
  }
  // Data.map((data)=>{
  //   console.log(data.email,"yeh Data hai")
  // })
  return (
    <div className="App">
      {show === true ? (
        <EditForm

          style={{ width: "400px" }}
          alagId={alagId}
          setAlagId={setAlagId}
          subMitEdited={subMitEdited}
          id={meraData.id}
          FName={FName}
          setFName={setFName}
          LName={LName}
          setLName={setLName}
          email={email}
          setEmail={setEmail}
          profile={profile}
          setProfile={setProfile}
          meraData={meraData}
          setMeraData={setMeraData}
          show={show}
          Setshow={Setshow}
        />
      ) : (
        ""
      )}
      {/* <h3> working </h3> */}
      <table
        className="table"
        style={show ? { opacity: "0.1" } : { opacity: "1" }}
      >
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}

            <th scope="col">Profile</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {meraData.map((data, id) => {
            return (
              <>
                <tr>
                  <td>
                    <img
                      src={data.avatar}
                      style={{ height: "80px", borderRadius: "50%" }}
                      alt=""
                    />
                  </td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>
                    <button
                      className="btn btn-primary "
                      onClick={() => {
                        EditItems(data.id);
                      }}
                      style={{ padding: "4px 18px" }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        DelItems(data.id);
                        notify(data.first_name);
                      }}
                    >
                      Delete
                    </button>
                  </td>

                  <ToastContainer />
                </tr>
              </>
            );
          })}

          {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
