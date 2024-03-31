import dayjs from 'dayjs'
import { MoonIcon, SunIcon, MoonCloudIcon, SunCloudIcon, ThunderRainIcon, WindIcon,RainIcon } from './Weathers'
import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window._AMapSecurityConfig = {
  securityJsCode: "3a6ac91abf5d04d9a781253c7db79b2e",
}
const GetWeatherByAMap = (AMap: any, city: string) => {
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.Weather', function() {
      //创建天气查询实例
      const weather = new AMap.Weather()

      //执行实时天气信息查询
      weather.getLive(city, function(err: any, data: any) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  })
}
const WeatherIcon = () => {
  const [weatherName,setWeatherName] = useState('')
  const [icon, setIcon] = useState(null)
  const initWeather = async () => {
    const now = dayjs()
    const hour = now.hour()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const AMap = await window.AMapLoader.load({
      key: 'b04fc9eead320984dbc6f9440785bde1',
      version: '2.0',
      plugins: ['AMap.Weather'],
    })
    // const cityRes = await getCityByAMap(AMap) as any
    const weatherRes = await GetWeatherByAMap(AMap, "广州市") as any
    const weather = weatherRes.weather as string
    setWeatherName(weather)
    let weatherCode, timeCode
    if (weather.includes('云') || weather.includes('阴')) {
      weatherCode = 1
    } else if (weather.includes('雷阵雨')) {
      weatherCode = 2
    } else if (weather.includes('雨')) {
      weatherCode = 3
    } else if (weather.includes('风')) {
      weatherCode = 4
    } else {
      weatherCode = 0
    }
    // todo 雪
    if (hour >= 6 && hour < 18) {
      timeCode = 0 // day
    } else {
      timeCode = 1 //night
    }
    const weatherMap: any = {
      '00': SunIcon,
      '01': SunCloudIcon,
      '02': ThunderRainIcon,
      '03': RainIcon,
      '04': WindIcon,
      '10': MoonIcon,
      '11': MoonCloudIcon,
      '12': ThunderRainIcon,
      '13': RainIcon,
      '14': WindIcon,
    }
    setIcon(weatherMap['' + timeCode + weatherCode])
  }
  useEffect(() => {
    initWeather()
    const timer = setInterval(initWeather, 3600 * 1000)
    return clearInterval(timer)
  }, [])
  return <div title={weatherName} className={'w-full h-full relative'}>
    {icon}
    {/*<WindIcon/>*/}
  </div>
}
export default WeatherIcon
