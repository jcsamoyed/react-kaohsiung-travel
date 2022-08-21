import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

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
    <>
      <h1>景點列表</h1>
      <ul>
        {listData.map((item) => {
          return (
            <li key={item.Id}>
              <Link to={item.Id}>
                {item.Name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TourList;