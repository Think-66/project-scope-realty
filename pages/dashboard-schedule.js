import axios from 'axios'
import React, { useState, useEffect } from 'react'
import * as dates from 'date-arithmetic'
import { Calendar, Views, Navigate, momentLocalizer } from 'react-big-calendar'
import TimeGrid from 'react-big-calendar/lib/TimeGrid'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const run = () => {
  if (typeof window !== 'undefined') {
    let w = window.innerWidth
    console.log(w)
  }
}

export default function EventCalendar(props) {
  const today = new Date();
  const [events, setEvents] = useState([])
  const [viewDays, setViewDays] = useState(5)

  run()
  useEffect(() => {

    axios
      .get('api/event/event')
      .then((res) => {
        mapData(res.data)

      })
      .catch(function (err) {
        console.log(err)
      })

  }, [])

  const mapData = (mapData) => {

    let tempArray = []

    mapData.map((item, index) => {
      const date = item.date.split('-')
      const startTime = item.startTime.split(':')
      const endTime = item.endTime.split(':')
      const obj = {
        'title': item.name,
        'start': new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]), parseInt(startTime[0]), parseInt(startTime[1])),
        'end': new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]), parseInt(endTime[0]), parseInt(endTime[1]))
      }
      tempArray.push(obj)
      setEvents(tempArray)

    })
  }

  useEffect(() => {
    let w = window.innerWidth
    console.log()

    if (w > 767) {
      setViewDays(5)
    } else if (w > 479) {
      setViewDays(4)
    } else {
      setViewDays(3)
    }

    const change = document.getElementsByClassName('rbc-time-header-cell-single-day');
    if (change.length > 0) {
      change[0].style.display = 'block'
    }

    const change2 = document.getElementsByClassName('rbc-time-view');
    if (change2.length > 0) {
      change2[0].style.border = '3px solid #E5E8EE'
    }

  })



  moment.locale('en-GB');
  const localizer = momentLocalizer(moment);

  let colorSequenceId = 0;
  function eventStyleGetter(props) {

    const colorSet1 = {
      backgroundColor: 'rgb(255 222 210)',
      color: 'rgb(255 72 67)',
      borderLeft: '3px inset rgb(255 72 67)'
    }

    const colorSet2 = {
      backgroundColor: 'rgb(197 255 231)',
      color: '#12b973',
      borderLeft: 'inset 3px #75fd9f',
    }

    const colorSet3 = {
      backgroundColor: 'rgb(255 171 192)',
      color: 'rgb(204 40 78)',
      borderLeft: '3px inset rgb(204 40 78)'
    }

    const colorSet4 = {
      backgroundColor: 'rgb(171 213 247)',
      color: 'rgb(18 69 185)',
      borderLeft: 'inset 3px rgb(18 69 185)',
    }

    const colorSet5 = {
      backgroundColor: 'rgb(255 250 154)',
      color: 'rgb(178 181 0)',
      borderLeft: 'inset 5px rgb(178 181 0)',
    }

    const colorSets = [colorSet1, colorSet2, colorSet3, colorSet4, colorSet5]

    const style = {
      boxShadow: 'rgb(0 0 0 / 20%) 0px 4px 8px 0px',
      padding: 5,
      paddingLeft: 10,
      textAlign: 'start',
      border: 0,
      ...colorSets[colorSequenceId],
      borderRadius: 4,
      height: 'auto',
    }

    if (colorSequenceId === colorSets.length - 1) colorSequenceId = 0;
    else colorSequenceId++;

    return { style: style }
  }

  function SlotComp(props) {

    return <div style={{ fontSize: 12, marginTop: 10, }}>{props.title}</div>
  }

  const allViews = Object
    .keys(Views)
    .map(k => Views[k])

  function CustomToolbar(props) {
    const pre_next_button_styles = {
      width: 100,
      height: 45,
      borderRadius: 9,
      color: '#41d45a',
      border: '0.5px solid #41d45a',
      backgroundColor: '#9acd3200'
    }

    let { localizer: { messages }, label, date } = props;
    //console.log("MESSAGE ", messages, label, props)
    return <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: 970 }}>
        <button className='btn text-primary font-weight-bold' style={{ background: 'silver', width: '100px', height: '40px', fontSize: '20px' }} onClick={() => props.onNavigate('PREV')}>Prev</button>
        <h3 style={{ fontFamily: 'Abhaya Libre', fontSize: 40, textAlign: 'center', color: '#3A4A54' }} ><strong>{localizer.format(date, 'MMMM')}</strong></h3>
        <button className='btn text-primary font-weight-bold' style={{ background: 'silver', width: '100px', height: '40px', fontSize: '20px' }} onClick={() => props.onNavigate('NEXT')} >Next</button>
      </div>
    </div>
  }

  function Book(props) {
    const { date, localizer } = props
    return (
      <div className="rbc-header" style={{ height: 150, padding: 10, }}>
        <div className='m-2' style={{ fontSize: 30, fontWeight: 600 }}>{localizer.format(date, 'D')}</div>
        <div style={{ fontSize: 18, fontWeight: 100 }}>{localizer.format(date, 'ddd')}</div>
      </div>
    )
  }

  const MyWeek = (props) => {

    let { date } = props
    let range = MyWeek.range(date)

    return <TimeGrid {...props} range={range} evetOffset={15} />


  }

  MyWeek.range = (date) => {

    let start = date
    let end = dates.add(start, viewDays - 1, 'day')

    let current = start
    let range = []

    while (dates.lte(current, end, 'day')) {
      range.push(current)
      current = dates.add(current, 1, 'day')
    }

    return range
  }

  MyWeek.navigate = (date, action) => {
    switch (action) {
      case Navigate.PREVIOUS:
        return dates.add(date, -1 * viewDays, 'day')

      case Navigate.NEXT:
        return dates.add(date, viewDays, 'day')

      default:
        return date
    }
  }

  MyWeek.title = date => {
    return `${date.toLocaleDateString()}`
  }


  return <div className='' style={{ color: '#7E97A5' }}>
    <div className='container my-5 p-5' style={{ height: 2200 }}>
      <Calendar
        components={{
          toolbar: CustomToolbar,
          week: {
            header: Book,
            allDay: () => null,
            event: SlotComp
          },
        }}
        events={events}
        localizer={localizer}
        step={60}
        timeslots={1}
        defaultView={Views.WEEK}
        defaultDate={new Date()}
        views={{ week: MyWeek }}
        eventPropGetter={eventStyleGetter}

        min={
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            0
          )
        }
        max={
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            23, 59
          )
        }
      />
    </div>
  </div>
}
