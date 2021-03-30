//Course Contructor
function Course(title,instructor,image) {
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}


//UI constructor
function UI() {
    
}
// dışarıdan gelen bilgilerin tanımlanmasını
UI.prototype.addCourseToList=function (course) {
    const list =document.getElementById('course-list');
    
    var html =`
        <tr>
            <td><img style="width:150px" src="img/${course.image}"/></img></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;

    list.innerHTML+=html;
}
// bilgilerin silinmesi kontrol
UI.prototype.clearControls=function () {
    const title= document.getElementById('title').value="";
    const instructor=document.getElementById('instructor').value="";
    const image = document.getElementById('image').value="";
    
}
UI.prototype.deleteCourse=function (element) {
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}
UI.prototype.showAlert=function (message,className) {
    var alert =
    `
        <div class="alert alert-${className}">
            ${message};
        </div>
    `;
    const row= document.querySelector('.row');
    //beforebegin, afterbegin, beforeEnd, afterEnd
    row.insertAdjacentHTML('beforeBegin',alert); 
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);
}
document.getElementById('new-course').addEventListener('submit',function (event) {
    const title= document.getElementById('title').value;
    const instructor=document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    // create course object
    const course = new Course(title,instructor,image);
    
    //create uı
    const ui =new UI();

    if(title==='' || instructor==='' || image===''){
        ui.showAlert('Please complete the Form','warning');
    }else {
        // add to course list
        ui.addCourseToList(course);
        
        // clear controls
        ui.clearControls();
        ui.showAlert('The course has been added','success');
    }  
    event.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function (e) {
    const ui =new UI();

    ui.deleteCourse(e.target);
    ui.showAlert('The course has been deleted','danger');
    
    e.preventDefault();
})