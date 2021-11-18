



$(document).ready(function () {
    
    // display current date and time
    let d = new Date();

    let year = d.getFullYear()
    let month = d.getMonth()+1;
    let day = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();

    let fullDate = 
        (day<10 ? '0' : '') + day + '/' +
        (month<10 ? '0' : '') + month + '/' +
        year;

    let fullTime =
        (hour<10 ? '0' : '') + hour + ':' +
        (minute<10 ? '0' : '') + minute;
    
    $("#currentDay").append(fullDate);
    $("#currentTime").append(fullTime);
    

    let timeArray = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 AM"];
    let timeID = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    let loopHtml='';
    let classPeriod = '';
    // set default loop html
    for(let i = 0; i < timeArray.length; i++){

        // set color based on current time
        if (timeID[i] < hour) {
            classPeriod = "past";
        } else if (timeID[i] > hour) {
            classPeriod = "future";
        } else {
            classPeriod = "present";
        };

        loopHtml += `
            <div class="row">
              <div class="col">
                <br />` + timeArray[i] + `
              </div>
              <div class="col-10 input-wrap">
                <p class="listTextContent ` + classPeriod + `">
                  <input class="inputTextBox inputTextBox`+i+`">
                </p>
              </div>
              <button type="button" class="col saveBtn save-`+i+`">Save</button>
            </div>`;

    };

    

    $('.loopHtml').append(loopHtml);
    
    // activate clickHandler on "save" button click
    for(let i = 0; i < timeArray.length; i++) {
        $(".save-"+i).bind("click", {
            index: i
        }, clickHandler);
    };

    // save text to local storage
    function clickHandler(event) {
        var i = event.data.index;
        localStorage.setItem('inputTextBoxValue'+i,$('.inputTextBox'+i).val());
    };
    
    // load text from local storage
    for(let i = 0; i < timeArray.length; i++) {
        if(localStorage.getItem('inputTextBoxValue'+i)!=null){
            $('.inputTextBox'+i).val(localStorage.getItem('inputTextBoxValue'+i));
        };
    };

});