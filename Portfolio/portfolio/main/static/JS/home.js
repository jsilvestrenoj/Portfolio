
document.addEventListener("DOMContentLoaded", function () {
    const nameSearch = document.getElementById("name-search")
    const tags = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")

    function filterProjects() {
        const nameQuery = nameSearch.value.toLowerCase();

        projects.forEach((project) => {
            const name = project.getAttribute('data-name')
            const nameMatch = name.includes(nameQuery)
            console.log(nameQuery + "1")
            console.log(name  + "2")
            if (nameMatch) {
                project.style.display = "";
            } else {
                project.style.display = "none";
            }
            
        })

    }

tags.forEach((tag) => {
    tag.addEventListener("click", function(){
        const selectedTag = this.getAttribute("data-tags")

        projects.forEach((project) => {
            const projectTags = project.getAttribute("data-tags")
            if (projectTags.includes(selectedTag)) {
                project.style.display = ""
            } else {
                project.style.display = "none"
            }

        })
    })

})

    
    nameSearch.addEventListener("keyup", filterProjects)
})