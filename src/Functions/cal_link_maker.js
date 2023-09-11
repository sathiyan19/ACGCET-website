let month_map={
    SEP:"09",
}

const cal_link_maker=(title,date,start_time,details,venue) => {
    let day=date.slice(4,6);
    let month=date.slice(0,3);
    let year=date.slice(7,);
    let indicator=start_time.slice(6,)
    let hour=start_time.slice(0,2)
    let minute=start_time.slice(3,5)
    hour=indicator==='pm'?(Number(hour)+12).toString():Number(hour).toString()
    let end_hour=(Number(hour)+2).toString()

    hour=hour.length===1?`0${hour}`:hour

    let date_time_string=`${year}${month_map[month]}${day}T${hour}${minute}00%2F`
    let end_time_string=`${year}${month_map[month]}${day}T${end_hour}${minute}00`

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${date_time_string}${end_time_string}&details=${details}&location=${venue}&sf=true&output=xml`;
};

export default cal_link_maker;