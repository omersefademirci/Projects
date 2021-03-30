//Course Class
class Course{
    constructor(title,instructor,image,courseprice,discountrate){
        this.courseId=Math.floor(Math.random()*10000);
        this.title=title;
        this.instructor=instructor;
        this.image=image;
        this.courseprice=courseprice;
        this.discountrate=discountrate;
        if(discountrate !=''){  
            this.total=courseprice - (courseprice * discountrate)/100;
        }else {
            document.getElementById("#colspan").colspan=1;
            
        }
    }
   
    // const eis=document.querySelector("#colspan");
    // if(eis.hasAttribute("colspan")){
    //     eis.removeAttribute("colspan");
    // }
    // this.total=courseprice;

}
// if(course.discountrate !=''){
//     let total=course.courseprice - (course.courseprice* course.discountrate)/100;
//   }
// if(course.discountrate !=''){
        // /    const total=course.courseprice - (course.courseprice * course.discountrate)/100;
        // }
class UI{
    addCourseToList(course){
        const list =document.getElementById('course-list');
       
        var html=
        `   <tr >
                 <td><img style="width:150px"src="img/${course.image}"/></img></td>
                 <td>${course.title}</td>
                 <td>${course.instructor}</td>
                 <td id="price"><s >$${course.courseprice}</s></td>
                 <td style="padding: auto auto" >$${course.total}</td>
                 <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
            
            </tr>`;
        list.innerHTML+=html;
    }
    clearControls(){
        const title= document.getElementById('title').value="";
        const instructor=document.getElementById('instructor').value="";
        const image = document.getElementById('image').value="";
        const courseprice=document.getElementById('course-price').value="";
        const discountrate=document.getElementById('discount-rate').value="";
    }
    deleteCourse(){

    }
    showalert(message,className){

    }





}
document.getElementById('new-course').addEventListener('submit',function (event) {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;
    const courseprice=document.getElementById('course-price').value;
    const discountrate=document.getElementById('discount-rate').value;

    const course =new Course(title,instructor,image,courseprice,discountrate);

    const ui =new UI();
    ui.addCourseToList(course);
         ui.clearControls();
    // if(title==='' || instructor==='' || image==='' || courseprice===''){
    //     if(title===''){
    //         ui.showalert('Title Kısmı Boş','warning');
    //     }else if(instructor===''){
    //         ui.showalert('Insructor Kısmı Boş','warning');
    //     }else if(image===''){
    //         ui.showalert('Image Kısmı Boş','warning');
    //     }else if(courseprice===''){
    //         ui.showalert('Course Price Kısmı Boş','warning');
    //     }
    // }else{
    //     ui.addCourseToList(course);
    //     ui.clearControls();
    // }
    event.preventDefault();
});