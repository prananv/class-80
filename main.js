var n_of_s_array=[];
function submit()

{
    var display_student_array = [];

    for (var r =1; r <=4; r++)
    {
        var name_of_s=document.getElementById("name_of_the_student_" +r);
        console.log(name_of_s);
        n_of_s_array.push(name_of_s);
    }

    console.log(n_of_s_array);

    var len = n_of_s_array.lenght;
    console.log(len);

    for (var y =0; y < len; y++)
    {
        display_student_array.push("<h4>NAME -"+ n_of_s_array[y] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block";
    
   function sorting()
   {
     n_of_s_array.sort();
     console.log(n_of_s_array);

     var display_student_array_sorting = [];

     var lenght_of_name_of_student_array = name_of_student_array.lenght;
     console.log(lenght_of_name_of_student_array);

     for (var k = 0;  k < lenght_of_name_of_student_array; k++)
     {
         display_student_array_sorting.push("<h4>NAME -" + n_of_s_array[k] + "</h4>");
         console.log(display_student_array_sorting);
     }
     
     var remove_commas = display_student_array_sorting.join(" ");
     console.log(remove_commas);

     document.getElementById("display_name_without_commas").innerHTML = remove_commas;
   }

}