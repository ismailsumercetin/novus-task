import DatePicker from "react-datepicker";
import useTask from '../contexts/useTask';
import ReportTaskButton from "./ReportTaskButton";
import SearchBar from "./SearchBar";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  const { selectedDate, setSelectedDate } = useTask();

  return (
    <header className="header shadow">
      <div className="header__left">
        <ReportTaskButton/>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => {
            if (date) {
              setSelectedDate(date);
            }
          }}
          dateFormat="d MMMM yyyy"
        />
      </div>
      <div className="header__right">
        <SearchBar/>
      </div>
    </header>
  );
};

export default Header;
