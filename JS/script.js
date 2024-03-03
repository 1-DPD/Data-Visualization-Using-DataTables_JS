$(document).ready(function () {
    // Sample data (you can replace this with your own data)
    var data = [
        ["Ved Kulkarni", "22", "Male", "Developer"],
        ["Janki Deshpande", "24", "Female", "Designer"],
        ["Rahul Joshi", "45", "Male", "Manager"]
    ];

    // Dynamically generate table headers
    var headers = ["Name", "Age", "Gender", "Role"];
    var tableHeaders = headers.map(function (header) {
        return "<th>" + header + "</th>";
    });
    $("#data-table thead tr").html(tableHeaders);

    // Dynamically populate the table with data
    var table = $("#data-table").DataTable({
        data: data,
        columns: headers.map(function (header) {
            return { title: header };
        }),
        paging: true,
        searching: true,
        ordering: true,
        info: true
    });

    // Add event listener for form submission
    $("#add-data-form").submit(function (event) {
        event.preventDefault();
        var formData = {
            name: $("#name").val(),
            age: $("#age").val(),
            gender: $("#gender").val(),
            role: $("#role").val()
        };
        table.row.add([formData.name, formData.age, formData.gender, formData.role]).draw();
        $("#add-data-form")[0].reset();
    });
});
