import { useState,useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import { UserState } from "../Context/UsersProvider";
import { Loading } from "../Components/Loading";

export function Add_TV_Shows() {
  // const { user } = UserState();
  const [user, setUser] = useState();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const [castName1, setCastName1] = useState("");
  const [castPic1, setCastPic1] = useState("");
  const [castGender1, setCastGender1] = useState("");
  const [castDob1, setCastDob1] = useState("");
  const [castName2, setCastName2] = useState("");
  const [castPic2, setCastPic2] = useState("");
  const [castGender2, setCastGender2] = useState("");
  const [castDob2, setCastDob2] = useState("");
  const [castName3, setCastName3] = useState("");
  const [castPic3, setCastPic3] = useState("");
  const [castGender3, setCastGender3] = useState("");
  const [castDob3, setCastDob3] = useState("");
  const [castName4, setCastName4] = useState("");
  const [castPic4, setCastPic4] = useState("");
  const [castGender4, setCastGender4] = useState("");
  const [castDob4, setCastDob4] = useState("");
  const [castName5, setCastName5] = useState("");
  const [castPic5, setCastPic5] = useState("");
  const [castGender5, setCastGender5] = useState("");
  const [castDob5, setCastDob5] = useState("");
  const [castName6, setCastName6] = useState("");
  const [castPic6, setCastPic6] = useState("");
  const [castGender6, setCastGender6] = useState("");
  const [castDob6, setCastDob6] = useState("");
  
  const [producerName, setProducerName] = useState("");
  const [producerPic, setProducerPic] = useState("");
  const [producerGender, setProducerGender] = useState("");
  const [producerDob, setProducerDob] = useState("");

  const [status, setStatus] = useState("");

  const userDataInLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("imdb-userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  };

  useEffect(() => userDataInLocalStorage(), []);

  const navigate = useNavigate();

  const statusStyles = {
    textAlign: "center",
    color: "red",
  };

  return ( user ?
    <div className="add-webSeries">
      {/* <TextField
        id="outlined-basic"
        label="TV show id"
        variant="outlined"
        type="number"
        placeholder="Enter any id"
        onChange={(event) => setId(event.target.value)}
      /> */}

      <TextField
        id="outlined-basic"
        label="TV show name"
        variant="outlined"
        type="text"
        placeholder="Enter name"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="TV show year"
        variant="outlined"
        type="number"
        placeholder="Enter year of release"
        onChange={(event) => setYear(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="TV show poster"
        variant="outlined"
        type="text"
        placeholder="Enter poster"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="TV show rating"
        variant="outlined"
        type="number"
        placeholder="Enter rating"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="TV show summary"
        variant="outlined"
        type="text"
        placeholder="Enter summary"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="TV show trailer"
        variant="outlined"
        type="text"
        placeholder="Enter trailer"
        onChange={(event) => setTrailer(event.target.value)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <TextField
        id="outlined-basic"
        label="Producer Name"
        variant="outlined"
        type="text"
        placeholder="Enter producer name"
        onChange={(event) => setProducerName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Producer pic"
        variant="outlined"
        type="text"
        placeholder="Enter producer"
        onChange={(event) => setProducerPic(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Producer gender"
        variant="outlined"
        type="text"
        placeholder="Enter Male, Female or other "
        onChange={(event) => setProducerGender(event.target.value)}
      />
      <p>DOB:</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        type="date"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setProducerDob(event.target.value)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 1"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) name 1"
        onChange={(event) => setCastName1(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 1"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setCastPic1(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew gender 1"
        variant="outlined"
        type="text"
        placeholder="Enter Male, Female or other "
        onChange={(event) => setCastGender1(event.target.value)}
      />
      <p>DOB:</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        type="date"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setCastDob1(event.target.value)}
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 2"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) name 2"
        onChange={(event) => setCastName2(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 2"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) pic 2 URL "
        onChange={(event) => setCastPic2(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Cast&crew gender 2"
        variant="outlined"
        type="text"
        placeholder="Enter Male, Female or other "
        onChange={(event) => setCastGender2(event.target.value)}
      />
      <p>DOB:</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        type="date"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setCastDob2(event.target.value)}
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 3"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) name 3"
        onChange={(event) => setCastName3(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 3"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) pic 3 URL "
        onChange={(event) => setCastPic3(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew gender 3"
        variant="outlined"
        type="text"
        placeholder="Enter Male, Female or other "
        onChange={(event) => setCastGender3(event.target.value)}
      />
      <p>DOB:</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        type="date"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setCastDob3(event.target.value)}
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 4"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) name 4"
        onChange={(event) => setCastName4(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 4"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) pic 4 URL "
        onChange={(event) => setCastPic4(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Cast&crew gender 4"
        variant="outlined"
        type="text"
        placeholder="Enter Male, Female or other "
        onChange={(event) => setCastGender4(event.target.value)}
      />
      <p>DOB:</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        type="date"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setCastDob4(event.target.value)}
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 5"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) name 5"
        onChange={(event) => setCastName5(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 5"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) pic 5 URL "
        onChange={(event) => setCastPic5(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew gender 5"
        variant="outlined"
        type="text"
        placeholder="Enter Male, Female or other "
        onChange={(event) => setCastGender5(event.target.value)}
      />
      <p>DOB:</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        type="date"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setCastDob5(event.target.value)}
      />
      <br></br>
      <TextField
        id="outlined-basic"
        label="Cast&crew name 6"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) name 6"
        onChange={(event) => setCastName6(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew pic 6"
        variant="outlined"
        type="text"
        placeholder="Enter cast(or crew) pic 6 URL "
        onChange={(event) => setCastPic6(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Cast&crew gender 6"
        variant="outlined"
        type="text"
        placeholder="Enter Male, Female or other "
        onChange={(event) => setCastGender6(event.target.value)}
      />
      <p>DOB:</p>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        type="date"
        placeholder="Enter cast(or crew) pic 1 URL "
        onChange={(event) => setCastDob6(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          if (
            !name ||
            !year ||
            !poster ||
            !rating ||
            !summary ||
            !trailer ||
            !castName1 ||
            !castPic1 ||
            !castDob1 ||
            !castDob2 ||
            !castDob3 ||
            !castDob4 ||
            !castDob5 ||
            !castDob6 ||
            !castGender1 ||
            !castGender2 ||
            !castGender3 ||
            !castGender4 ||
            !castGender5 ||
            !castGender6 ||
            !castName2 ||
            !castPic2 ||
            !castName3 ||
            !castPic3 ||
            !castName4 ||
            !castPic4 ||
            !castName5 ||
            !castPic5 ||
            !castName6 ||
            !castPic6||
            !producerName||
            !producerPic||
            !producerGender||
            !producerDob
          )
            return setStatus("Please fill out the fields");
          if (+rating > 10 || !+rating === 10 || +rating < 0)
            return setStatus("Rating should be in the range between 0 to 10");

          if (
            !castGender1 == "Male" ||
            !castGender1 == "Female" ||
            !castGender1 == "Other"
          ) {
            return setStatus("Gender1 should be Male,Female or Other");
          }
          if (
            !castGender2 == "Male" ||
            !castGender2 == "Female" ||
            !castGender2 == "Other"
          ) {
            return setStatus("Gender2 should be Male,Female or Other");
          }

          if (
            !castGender3 == "Male" ||
            !castGender3 == "Female" ||
            !castGender3 == "Other"
          ) {
            return setStatus("Gender3 should be Male,Female or Other");
          }

          if (
            !castGender4 == "Male" ||
            !castGender4 == "Female" ||
            !castGender4 == "Other"
          ) {
            return setStatus("Gender4 should be Male,Female or Other");
          }

          if (
            !castGender5 == "Male" ||
            !castGender5 == "Female" ||
            !castGender5 == "Other"
          ) {
            return setStatus("Gender5 should be Male,Female or Other");
          }

          if (
            !castGender6 == "Male" ||
            !castGender6 == "Female" ||
            !castGender6 == "Other"
          ) {
            return setStatus("Gender6 should be Male,Female or Other");
          }

          if (
            !producerGender == "Male" ||
            !producerGender == "Female" ||
            !producerGender == "Other"
          ) {
            return setStatus("Producer gender should be Male,Female or Other");
          }

          if (year < 1950 || year > 2024)
            return setStatus("Gender should be in between 1950 to 2024");

          const newShow = {
            id: id ? id : Math.floor(Math.random() * 10000 + 1).toString(),
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
            year: year,
            producers:[
              {
                name: producerName,
                pic: producerPic,
                gender: producerGender,
                dob: producerDob,
              }
            ],
            casts: [
              {
                name: castName1,
                pic: castPic1,
                gender: castGender1,
                dob: castDob1,
              },
              {
                name: castName2,
                pic: castPic2,
                gender: castGender2,
                dob: castDob2,
              },
              {
                name: castName3,
                pic: castPic3,
                gender: castGender3,
                dob: castDob3,
              },
              {
                name: castName4,
                pic: castPic4,
                gender: castGender4,
                dob: castDob4,
              },
              {
                name: castName5,
                pic: castPic5,
                gender: castGender5,
                dob: castDob5,
              },
              {
                name: castName6,
                pic: castPic6,
                gender: castGender6,
                dob: castDob6,
              },
            ],
          };
          fetch(`${API}/TVShows`, {
            method: "POST",
            body: JSON.stringify(newShow),
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": `${user.token}`,
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/TVShows"));
        }}
      >
        Add TV Show
      </Button>
      <h3 style={statusStyles}>{status}</h3>
    </div>
    :
    <Loading/>
  );
}
