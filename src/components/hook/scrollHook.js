

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