// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = document.getElementById("ufo-table");


// Add Data into table cells
function insertData(objArray) {

    // Clear table on function execution
    table.innerHTML = "";

    // Insert header into proper table cells
    var header = table.insertRow(0);

    // Insert new cells at new <tr> element
    var head0 = header.insertCell(0);
    var head1 = header.insertCell(1);
    var head2 = header.insertCell(2);
    var head3 = header.insertCell(3);
    var head4 = header.insertCell(4);
    var head5 = header.insertCell(5);
    var head6 = header.insertCell(6);

    // Add headers to the new cells
    head0.innerHTML = "Date";
    head1.innerHTML = "City";
    head2.innerHTML = "State";
    head3.innerHTML = "Country";
    head4.innerHTML = "Shape";
    head5.innerHTML = "Duration";
    head6.innerHTML = "Comments";

    // Loop through each object in filtered array
    objArray.forEach(function(objVals) {

        // Initialize array to hold the data object values
        var vals = Object.values(objVals);

        // Create an empty <tr> element and add it to the table under the header (array position [1])
        var row = table.insertRow(1);

        // Insert more cells to hold data
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);

        // Add data to the new cells
        cell0.innerHTML = vals[0];
        cell1.innerHTML = vals[1];
        cell2.innerHTML = vals[2];
        cell3.innerHTML = vals[3];
        cell4.innerHTML = vals[4];
        cell5.innerHTML = vals[5];
        cell6.innerHTML = vals[6];
    });

}


// Date Filter
function filterButton() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input value from the form and assign to dataSearch
    var dataSearch = d3.select("#datetime").node().value;

    // Changing value to lowercase string for data string comparison
    var strData = dataSearch.toString().toLowerCase();
    console.log(strData);


    // Filter original array of objects to include only objects that match dataDate
    var filterData;
    filterData = tableData.filter(x => { return x.datetime == strData;
    });

    // Checks next category against filter until exact match found
    if (filterData === undefined || filterData.length == 0) {
        filterData = tableData.filter(x => { return x.city == strData;
        });
    };

    if (filterData === undefined || filterData.length == 0) {
        filterData = tableData.filter(x => { return x.state == strData;
        });
    };

    if (filterData === undefined || filterData.length == 0) {
        filterData = tableData.filter(x => { return x.country == strData;
        });
    };

    if (filterData === undefined || filterData.length == 0) {
        filterData = tableData.filter(x => { return x.shape == strData;
        });
    };

    if (filterData === undefined || filterData.length == 0) {
        filterData = tableData.filter(x => { return x.durationMinutes == strData;
        });
    };

    if (filterData === undefined || filterData.length == 0) {
        filterData = tableData.filter(x  => {
             return x.comments == dataSearch.toString();
             });
    };

    console.log(filterData);


    // Clear the input value
    d3.select("#datetime").node().value = "";

    // Function to insert filtered data into proper table cells
    insertData(filterData);

};
// Add event listener for filter button
d3.select("#filter-btn").on("click", filterButton);