import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function TourDetail() {
  const { id } = useParams();
  const [tourData, setTourData] = useState({});
  useEffect(() => {
    fetch('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      .then(res => res.json())
      .then(result => {
        const list = result.data.XML_Head.Infos.Info;
        const tour = list.filter((item => {
          return item.Id === id;
        }))
        setTourData({ ...tour[0] });
      })
  }, [])

  return (
    <div className="container">
      {
        tourData.Name ? (
          <div className="detail">
            <h1>{tourData.Name}</h1>
            <img src={tourData.Picture1} alt={tourData.Name} />
            <em>{tourData.Description}<br /><br />▼</em>
            <p>{tourData.Toldescribe}</p>
          </div>
        ) : <Loading />
      }
      <p>
        <Link to="/tour-list">Back</Link>
      </p>
    </div>
  )
}

export default TourDetail;