export const scrollToSection = (sectionId, offset=50) =>{
    const element = document.getElementById(sectionId)
    if(element){
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        })
    }
}