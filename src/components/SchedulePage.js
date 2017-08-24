// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import BellScheduleContainer from '../containers/BellScheduleContainer';
import DatePickerContainer from '../containers/DatePickerContainer';
import CalendarContainer from '../containers/CalendarContainer';

reactDOM.render(<p>The information may not be fully accurate or finalized due to various unforeseen reasons. 
                It is important to double check with the school website for the official school related information.</p>,
                document.getElementById('app'));

type Props = {
  date: moment$Moment,
  onDateChange: (date: moment$Moment) => void
};

const SchedulePage = ({ date, onDateChange }: Props) => {
  return (
    <div>
      <DatePickerContainer date={date} onDateChange={onDateChange} />
      <BellScheduleContainer date={date} />
      <CalendarContainer date={date} />
    </div>
  );
};

export default SchedulePage;
