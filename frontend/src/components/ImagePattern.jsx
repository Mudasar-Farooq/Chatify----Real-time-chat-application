const ImagePattern = ({ title, subtitle }) => {
    return (
      <div style={{background: '#ebf9ed'}} className="h-[60vh] m-auto mt-[10rem] w-[31vw] hidden lg:flex items-center justify-center bg-base-100 p-6">
        <div className="max-w-md text-center">
          <div className=" grid grid-cols-3 gap-3 mb-5">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`text-sm  aspect-square rounded-2xl bg-customBlue ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default ImagePattern;