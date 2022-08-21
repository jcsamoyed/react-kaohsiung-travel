import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loading from "./Loading";

function TourList() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    fetch('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      .then(res => res.json())
      .then(result => {
        setListData(result.data.XML_Head.Infos.Info)
      })
  }, [])

  return (
    <div className="container">
      <h1>景點列表</h1>
      {listData.length ? (
        <ul className="tour-list-wrapper">
          {listData.map((item) => {
            return (
              <li key={item.Id}>
                <Link to={item.Id}>
                  <img src={item.Picture1} alt={item.Name} />
                  <p>{item.Name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : <Loading />
      }
    </div>
  )
}

export default TourList;