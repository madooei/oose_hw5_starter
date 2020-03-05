const validateCourse = () => {
    let name = document.querySelector("#courseName");
    if (name.value.length < 1) {
        alert("Course name cannot be empty!");
        return false;
    } else {
        return true;
    }
};
