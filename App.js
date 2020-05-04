const useState = React.useState
const useEffect = React.useEffect;

function App() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [hour, setHour] = useState(new Date().getHours());
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();
    const [date, setDate] = useState();
    useEffect(() => {
        setCurrentDate(new Date())
    })
    useEffect(() => {
        var newHour = new Date().getHours();
        setHour(`${newHour < 10 ? "0" : ""}${newHour}`);
    }, [currentDate]);

    useEffect(() => {
        var newMinutes = new Date().getMinutes();
        setMinute(`${newMinutes < 10 ? "0" : ""}${newMinutes}`);
    }, [currentDate]);

    useEffect(() => {
        var newSeconds = new Date().getSeconds();
        setSecond(`${newSeconds < 10 ? "0" : ""}${newSeconds}`);
    }, [currentDate]);

    useEffect(() => {
        var newDate = new Date();
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];

        setDate(`${days[newDate.getDay()]}. ${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}  `)
    })
    return (
        <div className="clock">
            <div className="time">
                <span className="date">{date}</span>
                <br/>
                <span className="time-item">{hour}</span>:
                <span className="time-item">{minute}</span>:
                <span className="time-item">{second}</span>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))