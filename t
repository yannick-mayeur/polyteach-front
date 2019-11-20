[1mdiff --git a/src/containers/CourseEditor.js b/src/containers/CourseEditor.js[m
[1mindex d0312f5..6fd5342 100644[m
[1m--- a/src/containers/CourseEditor.js[m
[1m+++ b/src/containers/CourseEditor.js[m
[36m@@ -21,11 +21,7 @@[m [mclass CourseEditor extends Component {[m
     this.state = {[m
       index: 0,[m
       course: {[m
[31m-        name: "",[m
[31m-        picture: "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-7.jpg",[m
[31m-        description: "",[m
         videos: [],[m
[31m-        students: [][m
       }[m
     }[m
   }[m
[36m@@ -102,7 +98,13 @@[m [mclass CourseEditor extends Component {[m
                 </Link>[m
               </div>[m
               <div className="col-md-6">[m
[31m-                <button onClick={() => this.props.saveNewCourse(this.state.course)} className="saveBtn" >[m
[32m+[m[32m                <button onClick={() => this.props.saveNewCourse({[m
[32m+[m[32m                  name: this.props.newCourse.name,[m
[32m+[m[32m                  picture: this.props.newCourse.picture.url,[m
[32m+[m[32m                  description: this.props.newCourse.description,[m
[32m+[m[32m                  videos: this.state.course.videos,[m
[32m+[m[32m                  students: this.props.newCourse.students.selectedStudents[m
[32m+[m[32m                })} className="saveBtn" >[m
                   {this.props.newCourse.fetching ? "SENDING..." : "SAVE"}[m
                 </button>[m
               </div>[m
