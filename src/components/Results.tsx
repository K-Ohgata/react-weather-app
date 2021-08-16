type ResultPropsType = {
  results: {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string,
    icon: string,
  }
}

const Results = ({results}: ResultPropsType) => {
  const{cityName,country,temperature,conditionText,icon}=results;
  return (
    <>
      {cityName&&<div className="results-city">{cityName}</div>}
      {country&&<div className="results-country">{country}</div>}
      {temperature&&<div className="results-temp">{temperature}<span>℃</span></div>}
      {conditionText&&<div className="results-condition"><img src={icon} alt="icon"></img><span>{conditionText}</span></div>}
    </>
    )
}

export default Results;