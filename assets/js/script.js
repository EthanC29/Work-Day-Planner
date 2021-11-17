var timeID = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM"];
var timeIDData = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am", "6am"];

var containerEl = $(".container");
var rowEl = document.createElement("div")
var colTimeEl = document.createElement("div")
var colTextEl = document.createElement("div")
var colButtonEl = document.createElement("button")
var pTextContent = document.createElement("p")



    for (var i = 0; i < timeID.length; i++) {
        
        containerEl.append(rowEl);
        rowEl.addClass("row row-width");

        rowEl.append(colTimeEl);
        colTimeEl.addClass("col").text("<br />" + timeID[i].value);

        rowEl.append(colTextEl);
        colTextEl.addClass("col-10");
        colTextEl.append(pTextContent);
        pTextContent.addClass("listTextContent");
        pTextContent.attr("data-date", timeIDData[i].value);

        rowEl.append(colButtonEl);
        colButtonEl.addClass("col btn btn-info btn-bounds");
        colButtonEl.attr("type", "submit");
        colButtonEl.textContent = "Save";

    }



