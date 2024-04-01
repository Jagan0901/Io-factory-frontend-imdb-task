import { useState,useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import { NavBar } from "./NavBar";
import { UserState } from "../Context/UsersProvider";

export function EditMovieForm({ series }) {
  // const { user } = UserState();
  const [user, setUser] = useState();
  const [name, setName] = useState(series.name);
  const [year, setYear] = useState(series.year);
  const [poster, setPoster] = useState(series.poster);
  const [rating, setRating] = useState(series.rating);
  const [summary, setSummary] = useState(series.summary);
  const [trailer, setTrailer] = useState(series.trailer);

  const [castName1, setCastName1] = useState(series.casts[0].name);
  const [castPic1, setCastPic1] = useState(series.casts[0].pic);
  const [castGender1, setCastGender1] = useState(series.casts[0].gender);
  const [castDob1, setCastDob1] = useState(series.casts[0].dob);
  const [castName2, setCastName2] = useState(series.casts[1].name);
  const [castPic2, setCastPic2] = useState(series.casts[1].pic);
  const [castGender2, setCastGender2] = useState(series.casts[1].gender);
  const [castDob2, setCastDob2] = useState(series.casts[1].dob);
  const [castName3, setCastName3] = useState(series.casts[2].name);
  const [castPic3, setCastPic3] = useState(series.casts[2].pic);
  const [castGender3, setCastGender3] = useState(series.casts[2].gender);
  const [castDob3, setCastDob3] = useState(series.casts[2].dob);
  const [castName4, setCastName4] = useState(series.casts[3].name);
  const [castPic4, setCastPic4] = useState(series.casts[3].pic);
  const [castGender4, setCastGender4] = useState(series.casts[3].gender);
  const [castDob4, setCastDob4] = useState(series.casts[3].dob);
  const [castName5, setCastName5] = useState(series.casts[4].name);
  const [castPic5, setCastPic5] = useState(series.casts[4].pic);
  const [castGender5, setCastGender5] = useState(series.casts[4].gender);
  const [castDob5, setCastDob5] = useState(series.casts[4].dob);
  const [castName6, setCastName6] = useState(series.casts[5].name);
  const [castPic6, setCastPic6] = useState(series.casts[5].pic);
  const [castGender6, setCastGender6] = useState(series.casts[5].gender);
  const [castDob6, setCastDob6] = useState(series.casts[5].dob);

  const [status, setStatus] = useState("");

  const [producerName, setProducerName] = useState(series.producers[0].name);
  const [producerPic, setProducerPic] = useState(series.producers[0].pic);
  const [producerGender, setProducerGender] = useState(
    series.producers[0].gender
  );
  const [producerDob, setProducerDob] = useState(series.producers[0].dob);

  const navigate = useNavigate();

  const userDataInLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("imdb-userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  };

  useEffect(() => userDataInLocalStorage(), []);

  const statusStyles = {
    textAlign: "center",
    color: "red",
  };

  return (
    <>
      <NavBar />
      <div className="add-webSeries">
        <TextField
          id="outlined-basic"
          label="Movie name"
          variant="outlined"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Movie year"
          variant="outlined"
          type="number"
          placeholder="Enter year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Movie poster"
          variant="outlined"
          type="text"
          placeholder="Enter poster"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Movie rating"
          variant="outlined"
          type="number"
          placeholder="Enter rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Movie summary"
          variant="outlined"
          type="text"
          placeholder="Enter summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Movie trailer"
          variant="outlined"
          type="text"
          placeholder="Enter trailer"
          value={trailer}
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
          value={producerName}
          onChange={(event) => setProducerName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Producer pic"
          variant="outlined"
          type="text"
          placeholder="Enter producer"
          value={producerPic}
          onChange={(event) => setProducerPic(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Producer gender"
          variant="outlined"
          type="text"
          placeholder="Enter Male, Female or other "
          value={producerGender}
          onChange={(event) => setProducerGender(event.target.value)}
        />
        <p>DOB:</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          placeholder="Enter cast(or crew) pic 1 URL "
          value={producerDob}
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
          value={castName1}
          onChange={(event) => setCastName1(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew pic 1"
          variant="outlined"
          type="text"
          placeholder="Enter cast(or crew) pic 1 URL "
          value={castPic1}
          onChange={(event) => setCastPic1(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew gender 1"
          variant="outlined"
          type="text"
          value={castGender1}
          placeholder="Enter Male, Female or other "
          onChange={(event) => setCastGender1(event.target.value)}
        />
        <p>DOB:</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          value={castDob1}
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
          value={castName2}
          onChange={(event) => setCastName2(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew pic 2"
          variant="outlined"
          type="text"
          placeholder="Enter cast(or crew) pic 2 URL "
          value={castPic2}
          onChange={(event) => setCastPic2(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew gender 2"
          variant="outlined"
          type="text"
          value={castGender2}
          placeholder="Enter Male, Female or other "
          onChange={(event) => setCastGender2(event.target.value)}
        />
        <p>DOB:</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          value={castDob2}
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
          value={castName3}
          onChange={(event) => setCastName3(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew pic 3"
          variant="outlined"
          type="text"
          placeholder="Enter cast(or crew) pic 3 URL "
          value={castPic3}
          onChange={(event) => setCastPic3(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew gender 3"
          variant="outlined"
          type="text"
          value={castGender3}
          placeholder="Enter Male, Female or other "
          onChange={(event) => setCastGender3(event.target.value)}
        />
        <p>DOB:</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          value={castDob3}
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
          value={castName4}
          onChange={(event) => setCastName4(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew pic 4"
          variant="outlined"
          type="text"
          placeholder="Enter cast(or crew) pic 4 URL "
          value={castPic4}
          onChange={(event) => setCastPic4(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew gender 4"
          variant="outlined"
          type="text"
          value={castGender4}
          placeholder="Enter Male, Female or other "
          onChange={(event) => setCastGender4(event.target.value)}
        />
        <p>DOB:</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          value={castDob4}
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
          value={castName5}
          onChange={(event) => setCastName5(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew pic 5"
          variant="outlined"
          type="text"
          placeholder="Enter cast(or crew) pic 5 URL "
          value={castPic5}
          onChange={(event) => setCastPic5(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew gender 5"
          variant="outlined"
          type="text"
          value={castGender5}
          placeholder="Enter Male, Female or other "
          onChange={(event) => setCastGender5(event.target.value)}
        />
        <p>DOB:</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          value={castDob5}
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
          value={castName6}
          onChange={(event) => setCastName6(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew pic 6"
          variant="outlined"
          type="text"
          placeholder="Enter cast(or crew) pic 6 URL "
          value={castPic6}
          onChange={(event) => setCastPic6(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Cast&crew gender 6"
          variant="outlined"
          type="text"
          value={castGender6}
          placeholder="Enter Male, Female or other "
          onChange={(event) => setCastGender6(event.target.value)}
        />
        <p>DOB:</p>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          value={castDob6}
          placeholder="Enter cast(or crew) pic 1 URL "
          onChange={(event) => setCastDob6(event.target.value)}
        />
        <Button
          variant="contained"
          color="success"
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
              !castPic6 ||
              !producerName ||
              !producerPic ||
              !producerGender ||
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
              return setStatus(
                "Producer gender should be Male,Female or Other"
              );
            }

            if (year < 1950 || year > 2024)
              return setStatus("Gender should be in between 1950 to 2024");
            const updatedShow = {
              name: name,
              year: year,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
              producers: [
                {
                  name: producerName,
                  pic: producerPic,
                  gender: producerGender,
                  dob: producerDob,
                },
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
            fetch(`${API}/Movies/${series.id}`, {
              method: "PUT",
              body: JSON.stringify(updatedShow),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((data) => data.json())
              .then(() => navigate("/Movies"));

            // webSeriesList.push(tvShow);
            // setWebSeriesList([...webSeriesList]);
          }}
        >
          Save
        </Button>
        <h3 style={statusStyles}>{status}</h3>
      </div>
    </>
  );
}
