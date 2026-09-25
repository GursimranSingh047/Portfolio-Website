import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [imgSrc, setImgSrc] = useState<string>(
    props.image || "/images/placeholder.webp"
  );
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(props.image || "/images/placeholder.webp");
    setHasError(false);
  }, [props.image]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("/images/placeholder.webp");
    }
  };

  const handleLoad = () => {
    ScrollTrigger.refresh();
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link || "#"}
        target={props.link ? "_blank" : undefined}
        rel={props.link ? "noopener noreferrer" : undefined}
        data-cursor="disable"
        aria-label={props.alt ? `Open ${props.alt}` : "Project screenshot"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={imgSrc}
          alt={props.alt || "Project screenshot"}
          onError={handleError}
          onLoad={handleLoad}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default WorkImage;
