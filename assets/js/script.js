



$(document).ready(function () {
    
    let d = new Date();

    let year = d.getFullYear()
    let month = d.getMonth()+1;
    let day = d.getDate();

    let fullDate = 
        (day<10 ? '0' : '') + day + '/' +
        (month<10 ? '0' : '') + month + '/' +
        year;
    
    $("#currentDay").append(fullDate);
    
    
    let timeArray = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM"];
    let timeID = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am", "6am"];
    let loopHtml=''; 
    //start---set default loop html
    for(let i = 0; i < timeArray.length; i++){
        loopHtml += `
            <div class="row row-width">
              <div class="col-1 col">
                <br />` + timeArray[i] + `
              </div>
              <div class="col-10 col input-wrap">
                <p class="listTextContent" data-time="` + timeID[i] + `">
                  <input class="inputTextBox inputTextBox`+i+`">
                </p>
              </div>
              <button type="button" class="col btn btn-info btn-bounds save-btn`+i+`">Save</button>
            </div>`;
    }
    $('.loopHtml').append(loopHtml);
    //end---set default loop html
    
    //start---add click 
    for(let i = 0; i < timeArray.length; i++) {
        $(".save-btn"+i).bind("click", {
            index: i
        }, clickHandler);
    }

    function clickHandler(event) {
        var i = event.data.index;
        //store the value
        localStorage.setItem('inputTextBoxValue'+i,$('.inputTextBox'+i).val())
    }
    
    
    //when load page, set default value to input
    for(let i = 0; i < timeArray.length; i++) {
        if(localStorage.getItem('inputTextBoxValue'+i)!=null){
            $('.inputTextBox'+i).val(localStorage.getItem('inputTextBoxValue'+i));
        }
    }
});