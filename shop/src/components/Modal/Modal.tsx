import { FC, useState,MouseEvent,useRef,useEffect  } from "react";
import "./Modal.css";
import Gallery from "../../images/gallery";

type Prop = {
  name?: string;
};



const Modal: FC<Prop> = ({ name }) => {
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const gallery = Object.entries(Gallery);


    const imgRef = useRef<HTMLImageElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const previousRef = useRef<HTMLDivElement>(null);


    const handleChange = (caseValue: string) => {
      if(caseValue === "next") {
        if(currentImageIndex !== gallery.length - 1){
          
          setCurrentImageIndex(currentImageIndex + 1);
        }
        else{
          setCurrentImageIndex(0);
        }
      }
      else{
        if(currentImageIndex !== 0){
          setCurrentImageIndex(currentImageIndex - 1);
        }
        else{
          setCurrentImageIndex(gallery.length - 1);
        }

      }
    };


    useEffect(() => {
        if (lightboxOpen) {
          document.body.classList.add('modal-open');
        } else {
          document.body.classList.remove('modal-open');
        }
      }, [lightboxOpen]);

      useEffect(()=>{
        const handleKeyPress = (event : KeyboardEvent) :void =>{
          
          if(lightboxOpen){
                        
            if(event.key === "escape"){
              setLightboxOpen(false);
            }
            else if(event.key === 'ArrowLeft'){
              handleChange('prev');
            }
            else if(event.key === 'ArrowRight'){
              handleChange('next');
            }
          }
        }


        document.addEventListener('keydown', handleKeyPress );
        return () => {
          document.removeEventListener('keydown', handleKeyPress );
        };
        
      },[handleChange])
    
    const handleClick = (index: number): void => {
        setCurrentImageIndex(index);
        setLightboxOpen(!lightboxOpen);
    };

    function closeDropdown(e:MouseEvent<HTMLDivElement>): void {
        if(e.target === imgRef.current) return;
        if(e.target === nextRef.current) return;
        if(e.target === previousRef.current) return;
        
        setLightboxOpen(false);
    }
    

    
  return (
    <>
      <div className="gallery-about">
        <h2>Gallery Image</h2>
        <h3>Our Gallery</h3>
        <div className="gallery-images">
          {gallery.map(([key, url], index) => {
            return (
              <div
                key={key}
                className={index === 0 ? name : ""}
                onClick={() => handleClick(index)}
              >
                <img src={url} alt="" />
              </div>
            );
          })}
        </div>
      </div>


      {lightboxOpen && (
        <div className="lightbox-gallery" onClick={(e)=>closeDropdown(e)} >
            <div className="modal-img">
                <div className="buttons-img previus" ref={previousRef} onClick={(e) => handleChange('prev')}>{'<'}</div>
                <img src={gallery[currentImageIndex][1]} ref={imgRef} alt="" />
                <div className="buttons-img next" ref={nextRef} onClick={(e) => handleChange('next')}>{'>'}</div>
            </div>
        </div>
      )}
    </>
  );
};

export default Modal;
