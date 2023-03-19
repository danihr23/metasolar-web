

export const scroll = (ref)=>{
    if (ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: "smooth",
        });
      }

}

export const scrollByPosition =(top)=>{

  window.scrollTo({
    left: 0,
    top: top,
    behavior: "smooth",
  })

}

export const scrollToFaq = () => {
  // Navigate to the home page
  
  // Add a hash fragment to the URL to scroll to the FAQ section
  setTimeout(() => {
    const element = document.querySelector('#my-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

export const scrollToRoadmap = () => {
  // Navigate to the home page


  // Add a hash fragment to the URL to scroll to the FAQ section

  setTimeout(() => {
    const element = document.querySelector('#roadmap-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};